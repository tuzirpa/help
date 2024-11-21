import{_ as a,c as t,j as e,o}from"./chunks/framework.DpY-CtK9.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"directive/web/getPages.md","filePath":"directive/web/getPages.md"}'),n={name:"directive/web/getPages.md"};function s(p,r,i,l,c,g){return o(),t("div",null,r[0]||(r[0]=[e("p",null,"import { Browser } from 'puppeteer-core'; import { Page } from 'puppeteer-core'; import { DirectiveTree } from '../types'; export const config: DirectiveTree = { name: 'web.getPages', icon: 'icon-web-create', displayName: '获取已打开标签页列表', comment: '在页面${browserPage}中获取所有标签页列表并返回', inputs: { browserPage: { name: 'browserPage', value: '', display: '', type: 'variable', addConfig: { label: '浏览器对象', type: 'variable', filtersType: 'web.browser', autoComplete: true } } },",-1),e("pre",null,[e("code",null,`outputs: {
    pages: {
        name: '',
        display: '数组-标签页列表',
        type: 'array',
        addConfig: {
            label: '对象',
            type: 'variable',
            defaultValue: 'webPages'
        }
    }
}
`)],-1),e("p",null,"};",-1),e("p",null,"export const impl = async function ({ browserPage }: { browserPage: Browser }) { const pages = await browserPage.pages(); return { pages }; };",-1)]))}const u=a(n,[["render",s]]);export{m as __pageData,u as default};
