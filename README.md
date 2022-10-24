# ssr-server-study

跟着掘金小册【SSR 实战：官网开发指南】实践的代码

（小册地址：<https://juejin.cn/book/7137945369635192836>）

与此同时，感觉到在写代码的时候中英文切换有些打断节奏，所以想尝试文本、注释以及学习笔记也使用英文来写。

## 1. how to execute ts files on node

theres are two methods

1. using ts-node to run the ts file
2. using webpack to bundle the ts file, and the execute the bundled bundle.js file.

## 1.1 ts-node

## 1.2 webpack bundle and execute

[webpack core concepts](https://webpack.js.org/concepts/)

`pnpm install @babel/preset-env babel-loader ts-loader webpack webpack-merge webpack-cli --save-dev`

how to know what dependencies should be installed?
> [create app - webpack](https://createapp.dev/webpack)

how to add tsconfig.json  
`tsc --init`

### nodemon - hot update

![image-20221015234533786](https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/2022-10-15-154534.png)

so we need to specify the watch list:

`npx nodemon --watch src server_build/bundle.js --ext tsx,ts`

### 1.3 client and server --- hydrate

There are 3 steps to render a static page.

1. render template page
2. match the router
3. modify the html header

![sum up](https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/2022-10-24-110504.jpg)


### 1.4 how to fetch the data 
We realize the static page render by using ssr before.

