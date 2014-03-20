#Moriturus
##Introduction
Moriturus是一个交互平台，用来处理像Mathematica一样工作习惯的人。

你可以像Mathematica一样使用它，同时你可以将它架设到你的远程服务器或者云平台，超级计算机上或者类似什么东西。

Moriturus既可以像bash一样工作，也可以像Mathematica一样in out或者两者兼有。在远程平台这样做的好处是，让你在打回车前远离了坑爹的延迟

当然，你可以写很多很多行的脚本进去，同时多次修改

Moriturus没有一行来自iPython的代码。。。虽然我们都用了Bootstrap的主题以及功能类似

用Moriturus玩你的交互器吧。

##使用方法
clone 下来，进入src 
    
    node app.js

在浏览器打开
    
    http:127.0.0.1:8080

然后填入你想要的交互工具（仅仅scheme通过了测试目前），Go

在每一个in内输入多行代码以后shift+enter

##Bug
Shift+Enter会有多余回车

有可能会出现僵尸进程

语法高亮和自动缩进尚未实现

##Moriturus te saluto.
Moriturus一词在mit-scheme关闭时候看到,意味将死之物。

在这个IDE越做越花哨的年代，我们就当缅怀下各种Moriturus状态下，连方向键都打不进去的交互解释器吧！