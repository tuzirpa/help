import { defineConfig } from "vitepress";
import mdItCustomAttrs from "markdown-it-custom-attrs";
import directives from "./directives.json";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "tuzi-rpa",
  description: "流程自动化工具",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/img/icon.png",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "/css/fancybox.css",
      },
    ],
    [
      "script",
      {
        src: "/js/fancybox.umd.js",
      },
    ],
  ],
  srcDir: "src",
  cleanUrls: true,
  markdown: {
    config: (md) => {
      // use more markdown-it plugins!
      md.use(mdItCustomAttrs, "image", {
        "data-fancybox": "gallery",
      });
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/img/icon.png",
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/intro", activeMatch: "^/intro/" },
      { text: "指令", link: "/directive", activeMatch: "^/directive/" },
      { text: "团队", link: "/team", activeMatch: "^/team/" },
    ],
    search: {
      provider: "local",
      options: {
        miniSearch: {
          options: {
            /* ... */
          },
          searchOptions: {
            /* ... */
          },
        },
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "没有找到结果",
            resetButtonTitle: "清除搜索条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
            },
          },
        },
      },
    },
    outline: {
      level: "deep",
      label: "页面导航",
    },
    sidebar: {
      "/intro/": [
        {
          base: "/intro",
          text: "快速上手",
          collapsed: false,
          items: [
            { text: "概览", link: "/" },
            { text: "安装", link: "/install/index" },
            { text: "快速入门", link: "/quickstart" },
            {
              text: "案列",
              collapsed: false,
              items: [
                {
                  text: "百度输入关键字搜索",
                  link: "/case/baidu-search",
                },
              ],
            },
          ],
        },
      ],
      "/directive/": [directives],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/tuzirpa/tuziRobot" },
    ],
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
  },
});
