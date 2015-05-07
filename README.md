###项目种子

```html
种子结构

project
   |--client
        |---assets                      //(for static resource)
        |---html                        //(for html pages)
        |---js
            |---lib                     //(for bower)
            |---**/*.js                 //(for other js module)
        |---style
            |---app.sass                //(for gulp-sass entry)
            |---main.sass               //(for import other)
            |---**.*.sass               //(for other css module)
        |---dist                        //(build static result)
            |---assets
            |---css
            |---js
                |---*.js
                |---*.min.js
        |---dist-html                   //(build page result)
            |---**/*.html
```

###Usage

```javascript

准备工具：
    1. gulp // npm i gulp -g
            // 用于工作流打包以及sass编译
    2. qin 或者 http-server   // npm i qin -g
            // qin是一个集多功能（自定义接口返回，自定义端口等）的静态资源服务器。

```

开发者
------------

```javascript

  cd [项目]
  npm i
  gulp init  // 初始化项目，慎重，将重置
  开启两个终端窗口
    |
    |---- gulp watch-sass
    |
    |---- qin

```

生产者
------------

```javascript

//当开发完成后，仅需要打包结果
有两种方式， make 或者 gulp

//方式一：make

  make init  // 安装依赖
  make build // 打包

  // 将得到  dist 以及 dist-html 文件夹

//方式二：gulp

  npm i      // 安装依赖
  gulp build // 打包

  // 将得到  dist 以及 dist-html 文件夹

```

部署：html
```
dist        ==> nginx ==> xxx.xxx.xxx/dist/**/*.*

dist-html   ==> FTL   ==> src="xxx.xxx.xxx/dist/**/*"

```
