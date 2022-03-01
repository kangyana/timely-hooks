<p align="center">
  <span style="font-size: 50px;color: #a0d911;">TIMELY HOOKS</span>
</p>

<div align="center">

一套及时雨的 React Hooks 库

[![NPM version][npm]][npm-url]
[![NPM downloads][npm-downloads]][npm-url]
![gzip size](https://img.badgesize.io/https:/unpkg.com/dynamic-load-script?label=gzip%20size&compression=gzip)
![GitHub](https://img.shields.io/github/license/kangyana/dynamic-load-script)

[English](https://github.com/kangyana/timely-hooks/blob/master/README.md) | 简体中文

</div>

## ✨ 特性

- 易学易用
- 支持 SSR
- 对输入输出函数做了特殊处理，避免闭包问题
- 包含大量提炼自业务的高级 Hooks
- 包含丰富的基础 Hooks
- 使用 TypeScript 构建，提供完整的类型定义文件

## 📦 安装

```bash
$ npm install --save timely-hooks
# or
$ yarn add timely-hooks
```

## 🔨 使用

```js
import { useAsyncEffect } from 'timely-hooks';
```

## 💻 在线体验

[![Edit demo for timely-hooks](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/demo-for-ahooks-forked-fg79k?file=/src/App.js)

## 🤝 参与共建

```bash
$ git clone git@github.com:kangyana/timely-hooks.git
$ cd hooks
$ yarn run init
$ yarn start
```

打开浏览器访问 http://127.0.0.1:8000

[npm]: https://img.shields.io/npm/v/dynamic-load-script.svg?style=flat
[npm-url]: https://www.npmjs.com/package/dynamic-load-script
[npm-downloads]: https://img.shields.io/npm/dm/dynamic-load-script.svg?style=flat