关于 vuepress 自动生成 sidebar 的 utils;

使用示例

```js
import { sidebar } from "vuepress-auto-sider-utils";

const nav = [{ text: "测试导航", link: "/js/" }];

// .vuepress 下的config.js文件
// 只需配置一级目录，该目录下的其它目录会自动生成二级目录
module.exports = {
  themeConfig: {
    nav,
    sidebar,
  },
};
```
