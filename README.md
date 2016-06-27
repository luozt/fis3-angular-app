# fis3-angular2-app

使用fis3构建工具来构建基于angular2的App

## 使用说明

默认使用fis3及其插件来进行编译和发布的工作，开发的服务器也使用fis3内置的server。

`npm i`安装插件后，`npm start`即可运行fis3的server来进行开发。

## 打包及发布

支持本地相对路径打包，测试环境、正式环境、和远程环境的绝对路径打包，分别对应的命令为：

* 本地相对路径：`fis3 release lc`
* 测试环境：`fis3 release qa`
* 正式环境：`fis3 release pr`
* 远程环境：`fis3 release pu`

可对fis-conf.js或package.json来进行具体的配置

## 更多说明

* 默认支持jade, less模板的编译
