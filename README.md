# FF-ui-Plus

## [FF-ui-Plus 使用 Demo 项目](https://github.com/wocwin/wocwin-admin)

> `wocwin-admin`是基于 Vue3.3、TypeScript、Vite4、Pinia、Element-Plus 开源的一套后台管理模板；此项目全面使用了`FF-ui-Plus`二次封装基础组件库

## 介绍

> 基于 vue3+ ts+ Element-plus 二次封装组件

这是我在学习 Vue3 中基于[Element-plus](https://element-plus.org/zh-CN/) 二次封装基础组件文档，希望对你有用。可查看 [详细组件案例文档](https://zhangpengfeia.github.io/ff-ui-plus/) 预览

### 安装

**建议您使用包管理器 ([pnpm](https://pnpm.io/)<el-tag  effect="dark">推荐</el-tag> ， [yarn](https://classic.yarnpkg.com/lang/en/)，[npm](https://www.npmjs.com/)) 安装 @zhangpengfeia/ff-ui-plus**。

```shell
// 使用pnpm
pnpm install @zhangpengfeia/ff-ui-plus -S

// 使用npm
npm install @zhangpengfeia/ff-ui-plus -S

// 使用yarn
yarn add @zhangpengfeia/ff-ui-plus
```

## 全局注册使用

> ### 前提条件：使用项目必须全局注册 Element-plus 组件库

```js
// 在main.js中按下引入
import { createApp } from "vue"
import App from "./App.vue"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import "element-plus/theme-chalk/dark/css-vars.css"
// import en from 'element-plus/es/locale/lang/en' // 引入element-plus语言包 en--不建议固定设置
import zhCn from "element-plus/es/locale/lang/zh-cn" // 引入element-plus语言包 zh-cn--不建议固定设置
import plusZhCn from "@zhangpengfeia/ff-ui-plus/locale/zh-cn" // 引入ff-ui-plus语言包 zh-cn--不建议固定设置
// import plusEn from '@zhangpengfeia/ff-ui-plus/locale/en' // 引入ff-ui-plus语言包 en--不建议固定设置
// element-plus图标
import * as ElementPlusIconsVue from "@element-plus/icons-vue"
import TuiPlus from "@zhangpengfeia/ff-ui-plus"
import "@zhangpengfeia/ff-ui-plus/index.css"
const app = createApp(App)
// 注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// 注册ElementPlus
app.use(ElementPlus, {
  locale: { ...zhCn, ...plusZhCn } // 语言设置--不建议固定设置
  // size: Cookies.get('size') || 'medium' // 尺寸设置
})
app.use(TuiPlus)
app.mount("#app")
```

## 按需引入

```js
// 在main.js中按下引入
import "@zhangpengfeia/ff-ui-plus/index.css"
// 单个.vue文件引入
;<script setup lang="ts">
  import {(TDetail, TForm)} from "@zhangpengfeia/ff-ui-plus"
</script>
```

## 国际化配置-- ConfigProvider <el-tag  effect="dark">推荐</el-tag>

```html
<template>
  <el-config-provider :locale="locale"> *** </el-config-provider>
</template>

<script setup>
  import { ElConfigProvider } from "element-plus"
  import { useGlobalStore } from "@/store/modules/global" // 引入pinia全局状态管理
  import en from "element-plus/es/locale/lang/en"
  import zhCn from "element-plus/es/locale/lang/zh-cn"
  import plusZhCn from "@zhangpengfeia/ff-ui-plus/locale/zh-cn"
  import plusEn from "@zhangpengfeia/ff-ui-plus/locale/en"

  const zhCnLocales = {
    ...zhCn,
    ...plusZhCn
  }
  const enLocales = {
    ...en,
    ...plusEn
  }

  const globalStore = useGlobalStore()
  const locale = computed(() => (globalStore.language === "zh" ? zhCnLocales : enLocales))
</script>
```

## 浏览器直接引入

直接通过浏览器的 HTML 标签导入 @zhangpengfeia/ff-ui-plus，然后就可以使用全局变量 `TuiPlus` 了。

根据不同的 CDN 提供商有不同的引入方式， 我们在这里以[unpkg](https://unpkg.com) 和 [jsDelivr](https://jsdelivr.com) 举例。 你也可以使用其它的 CDN 供应商。

### unpkg

```html
<head>
  <!-- 导入element-plus样式 -->
  <link rel="stylesheet" href="//unpkg.com/element-plus/dist/index.css" />
  <!-- 导入vue3 -->
  <script src="//unpkg.com/vue@3"></script>
  <!-- 导入element-plus -->
  <script src="//unpkg.com/element-plus"></script>

  <!-- 导入ff-ui-plus样式 -->
  <link rel="stylesheet" href="//unpkg.com/@zhangpengfeia/ff-ui-plus/index.css" />
  <!--导入ff-ui-plus"  -->
  <script src="//unpkg.com/@zhangpengfeia/ff-ui-plus"></script>
</head>
```

### jsDelivr

```html
<head>
  <!-- 导入element-plus样式 -->
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/element-plus/dist/index.css" />
  <!-- 导入vue3 -->
  <script src="//cdn.jsdelivr.net/npm/vue@3"></script>
  <!-- 导入element-plus -->
  <script src="//cdn.jsdelivr.net/npm/element-plus"></script>

  <!-- 导入ff-ui-plus样式 -->
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/@zhangpengfeia/ff-ui-plus/index.css" />
  <!--导入ff-ui-plus"  -->
  <script src="//cdn.jsdelivr.net/npm/@zhangpengfeia/ff-ui-plus"></script>
</head>
```

## 全部组件如下

| 组件名称                 | 说明                                                                                                                                                                   |
| :----------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| TLayoutPage              | 布局页面                                                                                                                                                               |
| TLayoutPageItem          | 布局页面子项                                                                                                                                                           |
| TAdaptivePage            | [一屏组件](https://github.com/zhangpengfeia/vitepress-ui/components/TAdaptivePage/base.html?_blank)（继承 TTable 及 TQueryCondition 组件的所有属性、事件、插槽、方法） |
| TQueryCondition          | [条件查询组件](https://github.com/zhangpengfeia/vitepress-ui/components/TQueryCondition/base.html?_blank)                                                              |
| TTable                   | [表格组件](https://github.com/zhangpengfeia/vitepress-ui/components/TTable/base.html?_blank)                                                                           |
| Virtualized TTable       | [虚拟列表](https://github.com/zhangpengfeia/vitepress-ui/components/TTableVirtual/base.html?_blank)                                                                    |
| TForm                    | [表单组件](https://github.com/zhangpengfeia/vitepress-ui/components/TForm/base.html?_blank)                                                                            |
| TSelectTable             | [下拉选择表格组件](https://github.com/zhangpengfeia/vitepress-ui/components/TSelectTable/base.html?_blank)                                                             |
| Virtualized TSelectTable | [下拉选择虚拟表格组件](https://github.com/zhangpengfeia/vitepress-ui/components/multipleVirtual/base.html?_blank)                                                      |
| TSelectIcon              | [图标选择组件](https://github.com/zhangpengfeia/vitepress-ui/components/TSelectIcon/base.html?_blank)                                                                  |
| TSelect                  | [下拉选择组件](https://github.com/zhangpengfeia/vitepress-ui/components/TSelect/base.html?_blank)                                                                      |
| TDetail                  | [详情组件](https://github.com/zhangpengfeia/vitepress-ui/components/TDetail/base.html?_blank)                                                                          |
| TButton                  | [防抖按钮组件](https://github.com/zhangpengfeia/vitepress-ui/components/TButton/base.html?_blank)                                                                      |
| TStepWizard              | [步骤条组件](https://github.com/zhangpengfeia/vitepress-ui/components/TStepWizard/base.html?_blank)                                                                    |
| TTimerBtn                | 定时按钮组件                                                                                                                                                           |
| TModuleForm              | [模块表单/详情组件](https://github.com/zhangpengfeia/vitepress-ui/components/TModuleForm/base.html?_blank)                                                             |
| TDatePicker              | [日期选择器组件](https://github.com/zhangpengfeia/vitepress-ui/components/TDatePicker/base.html?_blank)                                                                |
| TRadio                   | [单选组件](https://github.com/zhangpengfeia/vitepress-ui/components/TRadio/base.html?_blank)                                                                           |
| TCheckbox                | [多选组件](https://github.com/zhangpengfeia/vitepress-ui/components/TCheckbox/base.html?_blank)                                                                        |
| TChart                   | [图表组件](https://github.com/zhangpengfeia/vitepress-ui/components/TChart/base.html?_blank)                                                                           |
| TTabs                    | [标签页组件](https://github.com/zhangpengfeia/vitepress-ui/components/TTabs/base.html?_blank)                                                                          |
| TSelectIcon              | [图标选择组件](https://github.com/zhangpengfeia/vitepress-ui/components/TSelectIcon/base.html?_blank)                                                                  |

## Vue - Official （Volar）待验证

```js
// 需要在使用的项目的tsconfig.json文件中添加以下
compilerOptions：{
  "types": [
      "@zhangpengfeia/ff-ui-plus/index.d.ts"
    ],
}

```

## 自动按需导入 (暂不支持--待完善)

- 1. 安装插件

  ```sh
  pnpm install -D unplugin-vue-components unplugin-auto-import @ff-ui-plus/resolver

  ```

- 2.  配置 `vite.config.ts` 或者配置 `webpack(vue).config.js`

### vite.config.ts 配置

```js
// vite.config.ts
import { defineConfig } from "vite"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
import { TuiPlusResolver } from "@ff-ui-plus/resolver"

export default defineConfig({
  // ...
  plugins: [
    // ...
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver(), TuiPlusResolver()]
    })
  ]
})
```

### vue.config.js 配置

```js
const { defineConfig } = require("@vue/cli-service")
const AutoImport = require("unplugin-auto-import/webpack")
const Components = require("unplugin-vue-components/webpack")
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers")
const { TuiPlusResolver } = require("@ff-ui-plus/resolver")

module.exports = defineConfig({
  // ...
  configureWebpack: {
    plugins: [
      // ...
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [TuiPlusResolver(), ElementPlusResolver()]
      })
    ]
  }
})
```

## 安装依赖

> ### 注意: 本地环境版本最好安装 [Node.js 18.x+](https://nodejs.org/en)、[pnpm 7.x+](https://github.com/pnpm/pnpm/)

```shell
npm install -g pnpm

# 安装依赖
pnpm install --registry=https://registry.npmjs.org/
>pnpm config get registry 查看当前指向源

# 如果安装依赖失败，可以尝试使用淘宝镜像  --registry=https://registry.npmmirror.com/
>pnpm config set registry https://registry.npmmirror.com/ 切换淘宝镜像源
>pnpm install

```

## 本地运行 vitepress 中组件文档

```shell
// docs项目(文档demo示例)基于vue3+vite项目
npm run docs:dev

```
