---

title: "Termux 高级终端安装使用配置教程"
description: "转载文章"
date: 2019-03-18T12:00:00
lastmod: 2019-03-18T12:00:00
timezone: UTC+8
draft: false
tags: ["Termux", "编程"]
categories: ["Termux"]
author: "转载"

---
<!--more-->
![](https://image.3001.net/images/20180501/15251875958364.png)
Termux 高级终端安装使用配置教程,这篇文章拖了有小半年.因为网上相关的文章相对来说还是比较少的,恰好今天又刷了机,所以就特意来总结一下,希望本文可以帮助到其他的小伙伴.发挥Android平台更大的DIY空间.

# 简介

`Termux`是一个`Android`下一个高级的终端模拟器,开源且不需要`root`,支持`apt`管理软件包，十分方便安装软件包,完美支持`Python`,`PHP`,`Ruby`,`Go`,`Nodejs`,`MySQL`等。随着智能设备的普及和性能的不断提升，如今的手机、平板等的硬件标准已达到了初级桌面计算机的硬件标准,用心去打造完全可以把手机变成一个强大的工具.

- [官网](https://termux.com/)
- [Github项目地址](https://github.com/termux/termux-app)
- [Google Play下载地址](https://play.google.com/store/apps/details?id=com.termux)

> Google Play下载的版本比酷安要新,有能力建议下载Google PLay版本的.

# 基本操作

## 长按屏幕

显示菜单项（包括复制、粘贴、更多），此时屏幕出现可选择的复制光标
![](https://image.3001.net/images/20180501/15251424532278.png)

    长按屏幕
    ├── COPY:复制
    ├── PASTE:更多
    ├── More:更多
       ├── Select URL: 选择网址
       └── Share transcipt: 分享命令脚本
       └── Reset: 重置
       └── Kill process: 杀掉当前终端会话进程
       └── Style: 风格配色
       └── Help: 帮助文档


## 从左向右滑动

显示隐藏式导航栏，可以新建、切换、重命名会话session和调用弹出输入法
![](https://image.3001.net/images/20180501/15251425706184.png)

## 显示扩展功能按键

扩展功能键是什么?就是PC端常用的按键如:ESC键，CTR键，TAB键,但是手机上难以操作的一些按键.  

**效果图**

![](https://image.3001.net/images/20180501/15251430134084.png)

### 方法一

从左向右滑动,显示隐藏式导航栏,长按左下角的`KEYBOARD`.  

### 方法二

使用`Termux`快捷键:`音量+`+`Q`键  

# 常用快捷键" 常用快捷键">常用快捷键

`Ctrl`键是终端用户常用的按键 - 但大多数触摸键盘都没有这个按键。为此，Termux使用`音量减小按钮`来模拟`Ctrl`键。
例如，在触摸键盘上按`音量减小`+ `L`发送与在硬件键盘上按`Ctrl + L`相同的输入。  

- `Ctrl+A` -> 将光标移动到行首
- `Ctrl+C` -> 中止当前进程
- `Ctrl+D` -> 注销终端会话
- `Ctrl+E` -> 将光标移动到行尾
- `Ctrl+K` -> 从光标删除到行尾
- `Ctrl+L` -> 清除终端
- `Ctrl+Z` -> 挂起（发送SIGTSTP到）当前进程

`音量加键`也可以作为产生特定输入的`特殊键`.  

- `音量加+E` -> Esc键
- `音量加+T` -> Tab键
- `音量加+1` -> F1（和音量增加+ 2→F2等）
- `音量加+0` -> F10
- `音量加+B` -> Alt + B，使用readline时返回一个单词
- `音量加+F` -> Alt + F，使用readline时转发一个单词
- `音量加+X` -> Alt+X
- `音量加+W` -> 向上箭头键
- `音量加+A` -> 向左箭头键
- `音量加+S` -> 向下箭头键
- `音量加+D` -> 向右箭头键
- `音量加+L` -> | （管道字符）
- `音量加+H` -> 〜（波浪号字符）
- `音量加+U` -> _ (下划线字符)
- `音量加+P` -> 上一页
- `音量加+N` -> 下一页
- `音量加+.` -> Ctrl + \（SIGQUIT）
- `音量加+V` -> 显示音量控制
- `音量加+Q` -> 显示额外的按键视图

# 基本命令

`Termux`除了支持`apt`命令外,还在此基础上封装了`pkg`命令,`pkg`命令向下兼容`apt`命令.`apt`命令大家应该都比较熟悉了,这里直接简单的介绍下`pkg`命令:  

    pkg search <query>              搜索包
    pkg install<package>           安装包
    pkg uninstall <package>         卸载包
    pkg reinstall <package>         重新安装包
    pkg update                      更新源
    pkg upgrade                     升级软件包
    pkg list-all                    列出可供安装的所有包
    pkg list-installed              列出已经安装的包
    pkg shoe <package>              显示某个包的详细信息
    pkg files <package>             显示某个包的相关文件夹路径


# 目录环境结构

    ~ >echo$HOME
    /data/data/com.termux/files/home
    
     ~ >echo$PREFIX
    /data/data/com.termux/files/usr
    
     ~ >echo$TMPPREFIX
    /data/data/com.termux/files/usr/tmp/zsh


长期使用Linux的朋友可能会发现，这个HOME路径看上去可能不太一样,为了方便,`Termux` 提供了一个特殊的环境变量:`PREFIX`
![](https://image.3001.net/images/20180502/15252398558622.png)

# 更换国内源

更换`Termux`清华大学源,加快软件包下载速度.  

## 设置默认编辑器

    export EDITOR=vi


## 编辑源文件

    apt edit-sources


将原来的`https://termux.net`官方源替换为`http://mirrors.tuna.tsinghua.edu.cn/termux`
![](https://image.3001.net/images/20180501/15251457797689.png)
保存并退出  

## 直接编辑源文件

上面是官方推荐的方法,其实还有更简单的方法,类似于Linux下直接去编辑源文件:

    vi$PREFIX/etc/apt/sources.list


# 安装基本工具

    pkg update
    pkg install vim curl wgetgit unzip unrar

# Termux优化

## 终端配色

主要使用了`zsh`来替代`bash`作为默认`shell`.
使用一键安装脚本来安装,一步到位,顺便启动了外置存储,可以直接访问SD卡下的目录.  

> 执行下面这个命令确保已经安装好了curl

    sh -c "$(curl -fsSL https://github.com/Cabbagec/termux-ohmyzsh/raw/master/install.sh)"

![](https://image.3001.net/images/20180501/15251492617193.png)
Android6.0以上会弹框确认是否授权,`允许`授权后`Termux`可以方便的访问SD卡文件.
脚本允许后先后有如下两个选项:

    Enter a number, leave blank to not to change: 14
    Enter a number, leave blank to not to change: 6


分别选择`背景色`和`字体`
想要继续更改挑选配色的话,继续运行脚本来再次筛选:

    $ ~/termux-ohmyzsh/install.sh


`exit`重启`sessions`会话生效配置

## 访问外置存储优化

执行过上面的`zsh`一键配置脚本后,并且授予文件访问权限的话,会在家目录生成`storage`目录，并且生成若干目录，软连接都指向外置存储卡的相应目录
![](https://image.3001.net/images/20180501/15251507436942.png)

**创建QQ文件夹软连接**

手机上一般经常使用手机QQ来接收文件,这里为了方便文件传输,直接在`storage`目录下创建软链接.
**QQ**

    ln -s /data/data/com.termux/files/home/storage/shared/tencent/QQfile_recv QQ


**TIM**

    ln -s /data/data/com.termux/files/home/storage/shared/tencent/TIMfile_recv TIM


最后效果图如下:
![](https://image.3001.net/images/20180501/15251516872451.png)
这样可以直接在`home`目录下去访问QQ文件夹,非常方便文件的传输,大大提升了工作效率.
[http://mirrors.tuna.tsinghua.edu.cn/termux](http://mirrors.tuna.tsinghua.edu.cn/termux)

## oh-my-zsh主题配色" oh my zsh主题配色">oh my zsh主题配色

编辑`.zshrc`配置文件  

    $ vim .zshrc


第一行可以看到,默认的主题是`agnoster`主题:
![](https://image.3001.net/images/20180501/15251531807018.png)
在`.oh-my-zsh/themes`目录下放着`oh-my-zsh`所有的主题配置文件.
下面是国光认为还不错的几款主题

**agnoster**

![](https://image.3001.net/images/20180501/15251534292438.png)

**robbyrussell**

![](https://image.3001.net/images/20180501/15251540733399.png)

**jaischeema**

![](https://image.3001.net/images/20180501/15251541015433.png)

**re5et**

![](https://image.3001.net/images/20180501/15251541397.png)

**junkfood**

![](https://image.3001.net/images/20180501/15251541908342.png)

**cloud**

![](https://image.3001.net/images/20180501/15251542579462.png)

**random**

当然如果你是个变态的话,可以尝试`random`主题,每打开一个会话配色主题都是随机的.

    ZSH_THEME="random"

## 修改启动问候语

默认的启动问候语如下:
![](https://image.3001.net/images/20180501/15251478499802.png)
这个对于初学者有一定的帮助在前期,随着对`Termux`的熟悉,这个默认的问候语就会显得比较臃肿.
编辑问候语文件直接修改问候语:   

    vim $PREFIX/etc/motd


修改完的效果如下:
![](https://image.3001.net/images/20180503/15253204397796.png)
这样启动新的会话的时候看上去就会简洁很多.  

# 管理员身份

## 手机没有root

利用`proot`工具来模拟某些需要root的环境

    pkg install proot


然后终端下面输入:

    termux-chroot


即可模拟`root`环境
在这个`proot`环境下面,相当于是进入了`home`目录,可以很方便地进行一些配置.
![](https://image.3001.net/images/20180502/15252406356840.png)
在管理员身份下，输入`exit`可回到普通用户身份。

## 手机已经root

安装`tsu`,这是一个`su`的termux版本,用来在termux上替代`su`:

    pkg install tsu


然后终端下面输入:

    tsu


即可切换`root`用户,这个时候会弹出`root`授权提示,给予其`root`权限,效果图如下:
![](https://image.3001.net/images/20180501/15251567018423.png)
在管理员身份下，输入`exit`可回到普通用户身份。

# 信息安全

因为`termux`可以很好的支持`Python`,所以几乎所有用`Python`编写的安全工具都是可以完美的运行使用的.  总的来说可玩性还是比较高的.

## Metasploit

**安装Ｍetasploit**

Termux官方提供的自动话脚本安装方法如下:

    cd ～
    pkg install wget
    wget https://Auxilus.github.io/metasploit.sh
    bash metasploit.sh


> 注　在x86平台下自动化安装失败，想在x86平台下安装的参考　[官方的文档](https://wiki.termux.com/wiki/Metasploit_Framework) 手动去安装．　　

这个过程平均耗时大约3分钟左右（使用国内的清华源的情况下）．　　

**配置msf数据库缓存**

意外发现数据库居然都配置好了，启动`msfconsole会`自动连接数据库了．　　

![](https://image.3001.net/images/20180502/15252619337456.png)

接下来重建数据库缓存

    msf > db_rebuild_cache


这个时候立刻去搜索发现缓存依然没有建立，只能使用慢速搜索，这里其实是这个缓存建立需要时间，只要稍微等待一下就可以了．

> 国光以前这里做过测试，缓存建立的平均时间是3分钟左右．

然后就可以实现`msf`秒搜索的效果了，无需等待，感觉比电脑上还要快呐　　

![](https://image.3001.net/images/20180502/15252622202484.png)

### 解决metasploit启动后无法连接数据库

使用自动化脚本安装好`Metasploit`后使用`db_status`发现数据库是处于连接状态的,然后在使用`db_rebuild_cache`重新建立缓存,等待大约3分钟后,便可以使用快速搜索了,没毛病~
但是
在一段日子过后,可能会出现以下情况:
![](https://image.3001.net/images/20180507/15256704978052.png)

    msfconsole
    [-] Failed to connect to the database: could not connect to server: Connection refused
            Is the server running on host "127.0.0.1" and accepting
            TCP/IP connections on port 5432?


报这个错误是因为`postgresql`数据库没有启动造成的.解决方法就是启动数据库:  

> 本方法只针对termux上使用自动化脚本安装msf

    pg_ctl -D $PREFIX/var/lib/postgresql start


启动数据库后重新进入`msfconsole`会发现启动没有报错了,`db_status`查看下数据库连接,也正常了:
![](https://image.3001.net/images/20180507/1525670956965.png)

## Nmap" Nmap">Nmap

端口扫描必备工具  

    pkg install nmap


![](https://image.3001.net/images/20180502/15252522986960.png)

## hydra

Hydra是著名的黑客组织THC的一款开源暴力破解工具这是一个验证性质的工具，主要目的是：展示安全研究人员从远程获取一个系统认证权限。

```shell
pkg install hydra
```


![](https://image.3001.net/images/20180502/1525253245778.png!)

## sslscan

SSLscan主要探测基于ssl的服务，如https。SSLscan是一款探测目标服务器所支持的SSL加密算法工具。
SSlscan的代码托管在[Github](https://github.com/DinoTools/sslscan)

    pkg install sslscan


![](https://image.3001.net/images/20180502/15252523713030.png)

## whatportis

whatportis是一款可以通过服务查询默认端口，或者是通过端口查询默认服务的工具，简单易用。在渗透测试过程中，如果需要查询某个端口绑定什么服务器，或者某个应用绑定的默认端口，可以使用whatportis查询。

    pip2 install whatportis


![](https://image.3001.net/images/20180502/1525254451611.png!)

## SQLmap

SQLmap是一款用来检测与利用SQL注入漏洞的免费开源工具 [官方项目地址](https://github.com/sqlmapproject/sqlmap)

直接`git clone`源码

    git clone https://github.com/sqlmapproject/sqlmap.git
    cd sqlmap
    python2 sqlmap.py


> sqlmap支持pip安装了,所以建议直接 pip install sqlmap 来进行安装,然后终端下直接sqlmap就可以了,十分方便.

![](https://image.3001.net/images/20180502/15252521782388.png)

## RouterSploit

RouteSploit框架是一款开源的路由器等嵌入式设备漏洞检测及利用框架。

    pip2 install requests
    git clone https://github.com/reverse-shell/routersploit
    cd routersploit
    python2 rsf.py


![](https://image.3001.net/images/20180502/15252536832530.png)

## Slowloris

低带宽的DoS工具

    git clone https://github.com/gkbrk/slowloris.git
    cd slowloris
    chmod +x slowloris.py


![](https://image.3001.net/images/20180502/15252663642248.png)

## RED-HAWK

一款采用PHP语言开发的多合一型渗透测试工具，它可以帮助我们完成信息采集、SQL漏洞扫描和资源爬取等任务。

    pkg install php
    git clone https://github.com/Tuhinshubhra/RED_HAWK.git
    cd RED_HAWK
    php rhawk.php


![](https://image.3001.net/images/20180502/1525267319924.png!)

## Cupp

Cupp是一款用Python语言写成的可交互性的字典生成脚本。尤其适合社会工程学，当你收集到目标的具体信息后，你就可以通过这个工具来智能化生成关于目标的字典。

    git clone https://github.com/Mebus/cupp.git
    cd cupp
    python2 cupp.py


![](https://image.3001.net/images/20180502/15252677611697.png)

## Hash-Buster

Hash Buster是一个用python编写的在线破解Hash的脚本，官方说5秒内破解,速度实际测试还不错哦~

    git clone https://github.com/UltimateHackers/Hash-Buster.git
    cd Hash-Buster
    python2 hash.py


![](https://image.3001.net/images/20180502/15252684925926.png)

## D-TECT

D-TECT是一个用Python编写的先进的渗透测试工具,

- wordpress用户名枚举
- 敏感文件检测
- 子域名爆破
- 端口扫描
- Wordperss扫描
- XSS扫描
- SQL注入扫描等

    git clone https://github.com/shawarkhanethicalhacker/D-TECT.git
    cd D-TECT
    python2 d-tect.py
    

![](https://image.3001.net/images/20180502/152526900352.png)

## WPSeku

WPSeku 是一个用 Python 写的简单的 WordPress 漏洞扫描器，它可以被用来扫描本地以及远程安装的 WordPress 来找出安全问题。被评为2017年最受欢迎的十大开源黑客工具.

    git clone https://github.com/m4ll0k/WPSeku.git
    cd WPSeku
    pip3 install -r requirements.txt
    python3 wpseku.py


![](https://image.3001.net/images/20180502/15252705506839.png)

## XSStrike

XSStrike是一种先进的XSS检测工具。它具有强大的模糊测试引擎.  

    git clone https://github.com/UltimateHackers/XSStrike.git
    cd XSStrike
    pip2 install -r requirements.txt
    python2 xsstrike


![](https://image.3001.net/images/20180502/15252722868294.png)

## 小结

因为Termux完美的支持`Python`和`Perl`等语言,所以有太多优秀的信息安全工具值得大家去发现了,这里我就不一一列举了.

# Python环境部署

## 安装python2-7

    pkg install python2


安装完成后,使用`python2`命令启动`python 2.7.14`环境.
![](https://image.3001.net/images/20180501/15251677413951.png)

## 安装python3

    pkg install python


安装完成后,使用`python`命令启动`python 3.6.5`环境.
![](https://image.3001.net/images/20180501/152516780621.png)

## 升级pip版本

    python2 -m pip install --upgrade pip
    python -m pip install --upgrade pip


这两条命令分别升级了`pip2`和`pip3`到最新版.
**pip版本查看**
![](https://image.3001.net/images/20180501/15251709032749.png)

## ipython

ipython是一个python的交互式shell，支持变量自动补全，自动缩进，支持bash shell命令，内置了许多很有用的功能和函数。学习ipython将会让我们以一种更高的效率来使用python。
先安装`clang`,否则直接使用`pip`安装`ipython`会失败报错.  

    pkg install clang
    pip install ipython
    pip3.6 install ipython


然后分别使用`ipython`和`ipython2`进入`py2`和`py3`控制台:
![](https://image.3001.net/images/20180501/15251711666731.png)

## 编辑器

终端下有`vim`神器,并且官方也已经封装了`vim-python`,对`vim`进行了Python相关的优化.

    pkg install vim-python


**解决termux下的vim汉字乱码**

在家目录下,新建`.vimrc`文件

    vim .vimrc


添加内容如下:

    set fileencodings=utf-8,gb2312,gb18030,gbk,ucs-bom,cp936,latin1
    set enc=utf8
    set fencs=utf8,gbk,gb2312,gb18030


然后`source`下变量:

    source .vimrc


**效果图**
![](https://image.3001.net/images/20180501/15251690917140.png)

# nodejs

## 安装nodejs

    pkg install nodejs


安装比较方便,但是在安装的时候报错了

    Cannot read property &#39;length&#39; of undefined


查了下是这边版本的问题
![](https://image.3001.net/images/20180501/15251603187936.png)
官方的解决方法如下
[disable concurrency in case of libuv/libuv#1459](https://github.com/rvagg/node-worker-farm/commit/0b2349c6c7ed5c51e234e418fad226875313e773)
![](https://image.3001.net/images/20180501/15251607456224.png)

## 解决npm安装报错

    vim $PREFIX/lib/node_modules/npm/node_modules/worker-farm/lib/farm.js


我这里修改length的是`4`,这个好像和CPU有关,总之这里的length得指定一个数字.
![](https://image.3001.net/images/20180501/15251608278605.png)
然后在重新安装下`npm install hexo-cli -g`成功.

# MariaDB-MySQL-安装

MariaDB数据库管理系统是MySQL的一个分支，主要由开源社区在维护，采用GPL授权许可。开发这个分支的原因之一是：甲骨文公司收购了MySQL后，有将MySQL闭源的潜在风险，因此社区采用分支的方式来避开这个风险。

## 安装mariadb

    pkg install mariadb


## 安装基本数据

    mysql_install_db


## 启动mariadb服务

    mysqld


启动完成后,这个会话就一直存活,类似与debug调试一样,只有新建会话才可以操作.
![](https://image.3001.net/images/20180501/15251762051594.png)
关于隐藏会话可以使用`nohup`命令和`tmux`命令,这里我建议使用`tmux`命令  

## 新建termux会话

由于mariadb安装的时候没有设置密码,当前的`mariadb`密码为`空`.

    mysql


直接进入`mariadb`数据库.输入`exit`退出数据库.
![](https://image.3001.net/images/20180501/15251770923501.png)

## 修改密码" 修改密码">修改密码

输入一下命令,进行密码相关的安全设置:

    mysql_secure_installation


**输入当前输入密码**
因为是`空`密码,这里默认 `回车`

    Enter current password for root (enter for none):


**设置新密码**
这里设置新的root密码  

    Set root password? [Y/n] y
    New password:
    Re-enter new password:


**其他设置**
下面根据个人偏好来进行设置,没有绝对的要求

    Remove anonymous users? [Y/n] Y                #是否移除匿名用户
    Disallow root login remotely? [Y/n] n          #是否不允许root远程登录
    Remove test database and access to it? [Y/n] n #是否移除test数据库
    Reload privilege tables now? [Y/n] y           #是否重新加载表的权限

## 使用密码登录数据库" 使用密码登录数据库">使用密码登录数据库

    $ mysql -uroot -p
    Enter password: ***apache2


![](https://image.3001.net/images/20180501/15251777161538.png)

# tmux

Tmux是一个优秀的终端复用软件，类似GNU Screen，但来自于OpenBSD，采用BSD授权。一旦你熟悉了 tmux 后， 它就像一个加速器一样加速你的工作效率。

## 安装tmux

    pkg install tmux


## 新建mysql会话

上面介绍的`mysqld`后会一直卡在那里,强迫症表示接受不了,`重启手机`,现在尝试使用`tmux`来管理会话.

    tmux new -s mysql


可以看到最下面的提示,表明现在是在`mysql`的会话下面操作
![](https://image.3001.net/images/20180501/15251785128162.png)

## 启动mysqld并断开会话

**启动mysqld**

    mysqld


**让会话后台运行**
使用快捷键组合`Ctrl`+`b` + `d`，三次按键就可以断开当前会话。

## 使用mysql

现在那个`mysqld`会话被放在后台运行了,整个界面看上去很简介,使用

    mysql -uroot -p


可以优雅的使用数据库了.
**效果图**
![](https://image.3001.net/images/20180501/15251788017133.gif)
关于`tmux`更多进阶的用法这里不在过多介绍了.

# php

`termux`封装的php版本是`php 7.2.5`

## 安装PHP

    pkg install php


**查看下版本**
![](https://image.3001.net/images/20180501/15251829165152.png)

> 自`PHP5.4`之后 PHP内置了一个Web 服务器,来在`termux`下尝试下PHP Web Server的简单使.

## 编写测试文件

在家目录下建一个`www`文件夹:`mkdir www`
在`www`文件夹下新建一个`index.php`文件,其内容为   

    <?phpphpinfo();?>

![](https://image.3001.net/images/20180501/15251831922563.png)

## 启动WebServer

    php -S 127.0.0.1:8080 -t www/


浏览器访问效果如下:
![](https://image.3001.net/images/20180501/15251833614865.png)

# nginx

Nginx 是一个高性能的 Web 和反向代理服务器, 它具有有很多非常优越的特性.

## 安装nginx包

    pkg install nginx


## 切换root用户

尝试下能不能解析默认的`index.html`主页
这个文件在`termux`上的默认位置为`/data/data/com.termux/files/usr/share/nginx/html/index.html`
**切换root用户**

> 默认的普通权限无法启动nginx,需要模拟`root`权限才可以

没有这个命令的话,手动安装`pkg install proot`包  

    termux-chroot


进入模拟的root环境  

## 启动nginx

在模拟的root环境下启动`nginx`

    nginx


`termux`上`nginx`默认的端口是`8080`
查看下`8080`端口是否在运行  

    netstat -an |grep 8080


![](https://image.3001.net/images/20180502/15252383228620.png)
然后手机本地直接访问:`http://127.0.0.1:8080` 查看下`nginx`是否正常启动.
**效果图**
![](https://image.3001.net/images/20180502/15252318618015.png)
这样一个默认的`nginx`服务就起来了,但是意义不大,得配置一下可以解析`php`才会有更大的意义.

## 停止nginx服务

这里是直接杀掉占用端口的进程,具体端口以实际情况为准.

    fuser -k 8080/tcp


## 重启nginx服务

    nginx -s reload


# nginx解析PHP

`nginx`解析`PHP`这里单独拿出一级标题来叙述,成功解析的话,下面安装`wordpress`等cms就会轻松很多.
nginx本身不能处理PHP，它只是个web服务器，当接收到php请求后发给php解释器处理,nginx一般是把请求发fastcgi管理进程处理,PHP-FPM是一个PHP FastCGI管理器,所以这里得先安装`php-fpm`.    

> 这里默已经安装了nginx和php,没有安装的话,使用`pkg install php nginx`来进行安装,参考上面部分进行配置  

## 安装并配置php-fpm

**安装php-fpm**

    pkg install php-fpm


**配置php-fpm**
进入`proot`环境,然后编辑配置文件`www.conf`(先进proot可以更方便操作编写相关配置文件)  

    termux-chroot
    vim /etc/php-fpm.d/www.conf


定位搜索`listen`找到

    listen = /data/data/com.termux/files/usr/var/run/php-fpm.sock


将其改为

    listen = 127.0.0.1:9000


## 配置nginx

在`proot`环境下,然后编辑配置文件`nginx.conf`

    vim /etc/nginx/nginx.conf


下面给出已经配置好的模板文件,直接编辑替换整个文件即可:


    worker_processes  1;
    events {
        worker_connections  1024;}


​    
    http {
        include       mime.types;
        default_type  application/octet-stream;
        sendfile        on;
        keepalive_timeout  65;


​    
        server {
    
            listen       8080;
            server_name  localhost;
            root   /data/data/com.termux/files/usr/share/nginx/html;
            index  index.html index.htm;


​    
            error_page   500 502 503 504  /50x.html;
            location = /50x.html {
                root   /data/data/com.termux/files/usr/share/nginx/html;}


​    
            location ~ \.php$ {
                root           html;
                fastcgi_pass   127.0.0.1:9000;
                fastcgi_index  index.php;
                fastcgi_param  SCRIPT_FILENAME  /usr/share/nginx/html$fastcgi_script_name;
                include        fastcgi_params;}}}

里面的网站默认路径就是`nginx`默认的网站根目录:

    root   /data/data/com.termux/files/usr/share/nginx/html;
    fastcgi_param  SCRIPT_FILENAME  /usr/share/nginx/html$fastcgi_script_name;

要修改网站默认路径的话,只需要修改这两处即可.

## 建立php测试文件

在`/usr/share/nginx/html`目录下新建一个`phpinfo.php`文件,其内容是:`<?php phpinfo();?>`
![](https://image.3001.net/images/20180502/15252458901236.png)
went

## 启动php-fpm和nginx

在`proot`环境下面分别启动`php-fpm`和`nginx`,这里的`nginx`不在`proot`环境下启动后会出一些问题,感兴趣的可以自己去研究看看.  

    php-fpm
    nginx


## 浏览器访问测试

浏览器访问`http://127.0.0.1:8080/phpinfo.php` 查询`php`文件是否解析了.
![](https://image.3001.net/images/20180502/15252463292840.png)

# 搭建WordPress

这里只是用`wordpress`做个典型安利来讲解,类似地可以安装`Discuz`,`DeDecms`等国内主流的PHP应用程序.

## 方法一-使用PHP内置的Web-Server

确保安装并配置了`php`和`mariadb`,没有安装好的话,参考本文中具体细节部分来进行安装.
**新建数据库**

> `***` 这里是mysql的密码

    mysql -uroot -p***-e"create database wordpress;show databases;"

**下载解压wordpress**

    wget https://cn.wordpress.org/wordpress-4.9.4-zh_CN.zip
    pkg install unzip
    unzip wordpress-4.9.4-zh_CN.zip


**启动PHP Web Server**
到解压后的`wordpress`目录下,执行

    cd wordpress
    php -S 127.0.0.1:8080


然后浏览器访问`127.0.0.1:8080`开始进行`wordperss`的安装.
**效果图**
![](https://image.3001.net/images/20180501/15251896513740.png)

## 方法二-nginx-PHP-Mariadb

上面使用的方法一是直接使用PHP自带的`PHP Web Server`来运行的,看上去不够严谨~,所以这里用`nginx`来部署`wordpress`.
确保安装了`PHP`,`php-fpm`,`mariadb`,没有安装的话,参考本文中具体细节部分来进行安装和配置.
**新建数据**和**wordpress下载**参考上面的`方法一`,这里主要介绍使用`nginx`去解析`wordpress`源文件.
当前解压后`wordpress`的绝对路径是:

    /data/data/com.termux/files/home/wordpress


**编辑nginx.conf**

    vim /etc/nginx/nginx.conf


修改为如下几处:

    root   /data/data/com.termux/files/home/wordpress;
            index  index.html index.htm index.php;
    
    fastcgi_param  SCRIPT_FILENAME  /data/data/com.termux/files/home/wordpress$fastcgi_script_name;


![](https://image.3001.net/images/20180502/15252481801600.png)
**启动php-fpm和nginx**
在`proot`环境下面分别启动`php-fpm`和`nginx`,这里的`nginx`不在`proot`环境下启动后会出一些问题,感兴趣的可以自己去研究看看.  

    php-fpm
    nginx


**安装wordpress**
浏览器访问:`http://127.0.0.1:8080/wp-admin/setup-config.php`进行安装.
**效果图**
![](https://image.3001.net/images/20180502/15252484266727.png)
同理安装其他博客也就轻而易举了,可玩性大大增加~  

# 搭建hexo博客

## 安装hexo

    npm install hexo-cli -g


## 部署hexo博客环境

然后建立一个目录,然后到这个目录下初始化hexo环境

    mkdir hexoblog  #手动创建一个目录
    cd hexoblog  
    hexo init   #初始化hexo环境
    hexo g      #生成静态文件
    hexo s      #启动hexo


![](https://image.3001.net/images/20180502/15251904412057.png)
然后就跑起来一个最基本的hexo博客
关于hexo博客的详细教程,建议搭建去参考hexo官方文档,我这里重点在于 termux 其他的不作过多的叙述.
**效果图**
![](https://image.3001.net/images/20180502/1525190501582.png!)

# termux-ssh-连接电脑

有时候要操作电脑,这个时候有了`termux`,躺在床上就可以操作电脑了,岂不是美滋滋~~
安装`openssh`

    pkg install openssh


然后就可以直接ssh连接你的电脑了

> 前提是电脑安装了ssh服务

    $ ssh sqlsec@192.168.1.8


手机连接操作电脑效果图:
![](https://image.3001.net/images/20180501/15251634576779.png)

# 电脑ssh连接Termux

emmm 这个需求比较鸡肋,但是写文字嘛就得写全了~

**安装openssh**

同样也需要`openssh`才可以  

    pkg install openssh


**启动sshd**

安装完成后,`sshd`服务默认没有启动,所以得手动启动下:  

    sshd


因为手机上面低的端口有安全限制,所以这里的`openssh`默认的`sshd`默认的服务是`8022`端口上的.
`ssh`的用户名用`whoami`命令看下.
![](https://image.3001.net/images/20180501/15251646896319.png)
可以看到`sshd`启动后,端口才可以看到.  

**PC端生成公钥**

`ssh`登录是key公钥模式登录,首先在PC端生成秘钥:  

    sqlsec@ubuntu:-> ssh-keygen -t rsa


执行完成后，会在家目录下创建3个文件
`id_rsa`,  `id_rsa.pub` , `known_hosts`
![](https://image.3001.net/images/20180501/15251652383913.png)

**拷贝公钥到手机**

然后把公钥`id_rsa.pub`拷贝到手机的`data\data\com.termux\files\home\.ssh`文件夹中.  

**将公钥拷贝到验证文件中**

在`Termux`下操作  

    cat id_rsa.pub > authorized_keys


![](https://image.3001.net/images/20180501/15251669649531.png)

**PC端连接手机termux**

    sqlsec@ubuntu->ssh -p8022 u0_a119@192.168.1.3


**效果图**
![](https://image.3001.net/images/20180501/15251672621339.png)
pc端连接手机termux 真心鸡肋呀~(忍不住自己吐槽下自己)

# 使用Aria2打造自己的下载工具

Aria2是一个轻量级多协议和多源命令行下载实用工具。它支持 HTTP / HTTPS, FTP, SFTP, bt 和 Metalink。通过内置 Aria2 可以操作 json - rpc 和 xml - rpc。配置好的话还可以高速下载百度云文件.  

## 安装aria2

    pkg install aria2


## 本地启动服务

    aria2c --enable-rpc --rpc-listen-all


这个`rpc`服务默认监听的是`6800`端口,启动后方便下面的Web界面连接操作.  

## webui-aria2

这是个Aria2的热门项目,把Aria2封装在了Web平台,操作起来更加简单便捷。

    git clone https://github.com/ziahamza/webui-aria2.git
    cd webui-aria2
    node node-server.js


> 需要node来运行,没有安装的 话使用`pkg install nodejs`来安装  

使用效果图 ,速度蛮快的 ,有兴趣的可以研究如何利用`aria2`来下载百度云文件,等你们来探索.

![](https://image.3001.net/images/20180502/15252753579498.png)

# 多功能文件分享

[官方项目地址](https://github.com/mholt/caddy)

## 安装caddy

官方:到目前为止，在Android上运行Caddy有两种方式：`Termux`和`adb`,所以那就顺便折腾一下看看吧:  

    cd ~
    curl https://getcaddy.com |bash -s personal http.filemanager


这一步可能执行要`3`番钟左右,耐心等待一下即可.

## 编写配置文件

    cd ~
    vim Caddyfile


内容如下:

    :8080 {
    filemanager / /sdcard
    timeouts none
    gzip}

这里的`8080`端口号可以随意指定,因为手机权限比较低,所以一般设置`1024`以上的端口.  

注意`8080`和`{`之间有一个`空格`

注意`/ / sdcard` 两个斜杠之间也有一个空格  

## 启动caddy

    caddy


![](https://image.3001.net/images/20180503/15253177578355.png)

## 效果

浏览器访问:`http://127.0.0.1:8080`即可,局域网内的用户访问手机ip地址即可.  

默认账号和密码为`admin`,`admin`.

![](https://image.3001.net/images/20180503/15253179015491.png)

可以在设置界面里面  `设置简体中文`,可以修改`更新默认密码`.  

可以直接查看文件,也支持`Linux`命令搜索.  

![](https://image.3001.net/images/20180503/15253180376304.png)

![](https://image.3001.net/images/20180503/1525317995747.png!)

# Termux-api

Termux:API，用于访问手机硬件,实现更多的可玩性,可以实现如下等功能:

- 访问电池信息
- 获取相机设备信息
- 获取本机设备信息
- 获取设置剪贴板信息
- 获取通讯录信息
- 获取设置手机短信
- 拨打号码
- 振动设备

## 安装Termux-api

[Termux-api Google Play下载地址](https://play.google.com/store/apps/details?id=com.termux.api)

![](https://image.3001.net/images/20180503/15253115369877.png)

> 补充一下链接[如何在电脑上下载Google play上的应用？](https://www.zhihu.com/question/22382577)

## 安装Termux-api软件包

安装完`Termux-api`APP后,`Termux`里面必须安装对应的包后才可以实现操作手机底层.  

    pkg install termux-api


下面只列举一些可能会用到的,想要获取更多关于`Termux-api`的话,那就去参考官方文档.  

## 获取电池信息

    termux-battery-status


可以看到电池的-健康状况-电量百分比-温度情况等

    {"health":"GOOD",
      "percentage": 67,
      "plugged":"UNPLUGGED",
      "status":"DISCHARGING",
      "temperature": 24.600000381469727
    }

## 获取相机信息

    termux-camera-info


## 获取与设置剪贴板

**查看当前剪贴板内容**

    termux-clipboard-get


**设置新的剪贴板内容**

    termux-clipboard-set PHP是世界上最好的语言


**效果演示**

![](https://image.3001.net/images/20180503/15253126104329.png)

## 获取通讯录列表

    termux-contact-list


![](https://image.3001.net/images/20180503/15253128744968.png)

## 查看短信内容列表

    termux-sms-inbox


![](https://image.3001.net/images/20180503/15253131256045.png)

## 发送短信

    termux-sms-send


支持同时发送多个号码,实现群发的效果,官方介绍如下:

    termux-sms-send -n number(s)  recipient number(s) - separate multiple numbers by commas


**发送测试**

    termux-sms-send -n 10001 cxll


![](https://image.3001.net/images/20180503/15253135795603.png)

## 拨打电话

    termux-telephony-call


拨打电话给`10001`中国电信,查看下话费有没有欠费~?

    termux-telephony-call 10001


![](https://image.3001.net/images/20180503/15253140551807.png)

## WiFi相关

**获取当前WiFi连接信息**

    termux-wifi-connectioninfo


**获取最近一次WiFi扫描信息**

    termux-wifi-scaninfo


![](https://image.3001.net/images/20180503/15253138725488.png)

## 小结-1

直接操作调动系统底层的话,可以通过编程来实现自动定时短信发送,语音播报等 DIY空间无线

# 一些无聊的尝试

一些无聊有趣的版块,如果你是一个正经讲究人,可以跳过这个板块以节约你的阅读时间.  

## nyancat-彩虹猫

**彩虹貓**（英语：**Nyan Cat**）是在2011年4月上传在Youtube 的视频，并且迅速爆红于网络，並在2011年YouTube浏览量最高的视频中排名第五.

    pkg install nyancat
    nyancat


![](https://image.3001.net/images/20180503/15253150101146.png)

什么鬼~完全Get不到国外人的趣味点~

## 终端二维码

Linux 命令行下的二维码,主要核心是这个网址:`http://qrenco.de/`

    echo"http://www.sqlsec.com"|curl -F-=\<- qrenco.de


![](https://image.3001.net/images/20180503/15253248656208.png)
如果你不嫌无聊的话还可以扫描这个二维码,然后就打开我的博客了.  

## 终端地图

一个基于`nodejs`编写的命令行下的地图.

    npm install mapscii -g
    mapscii


进入终端地图
![](https://image.3001.net/images/20180503/15253279325608.png)
**操作方法**

- 方向键        移动
- `a`和`z`键   放大缩小
- `q`键        退出

终端下的地图!讲究人~ 如果你足够无聊的话,还可以尝试能不能在这个地图上找到自己所在的位置.

# 在termux下安装linux操作系统

这里只讲系统的安装，对termux的折腾请见我另外的博文。

没有linux基础的就别忙往下看了。

## 安装步骤

### 1. 下载安装脚本

    $ wget http://funs.ml/file/atilo


### 2.设置执行权限

    $ chmod +x  atilo


### 3. 运行atilo

    $ ./atilo


此时会出现如下界面：

![](http://upload.spursgo.com/2017/09/4233301994.png)

通过信息我们可以知道 ./atilo + 系统名 就可以按照

### 4. 我们来安装一个arch试试

    $ ./atilo arch


安装完成之后会提示你通过startarch指令启动arch

### 5.启动arch

    $ startarch


启动之后你可以安装screenfetch秀一秀

    $ paceman -S screenfetch
    
    $ screenfetch


Screenshot_20170926-143923.png

是不是酷毙了。

### 6.  删除arch

删除系统的方法很简单

    $ ./atilo -r arch
