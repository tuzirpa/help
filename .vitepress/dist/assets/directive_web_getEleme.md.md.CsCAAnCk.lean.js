import{_ as a,c as l,j as e,a as n,o as r}from"./chunks/framework.DpY-CtK9.js";const b=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"directive/web/getEleme.md.md","filePath":"directive/web/getEleme.md.md"}'),o={name:"directive/web/getEleme.md.md"};function s(p,t,i,m,c,d){return r(),l("div",null,t[0]||(t[0]=[e("p",null,"import { ElementHandle, Page } from 'puppeteer-core'; import { DirectiveTree } from 'tuzirobot/types'; export const config: DirectiveTree = { name: 'web.getElements', icon: 'icon-web-create', displayName: '获取相似元素', comment: '在页面${browserPage}中获取 ${selector} 匹配的元素，元素列表保存到${elements},元素个数保存到${elementCount}', inputs: { browserPage: { name: 'browserPage', value: '', display: '', type: 'variable', addConfig: { label: '标签页对象', placeholder: '选择标签页对象', type: 'variable', filtersType: 'web.page', autoComplete: true } }, selector: { name: 'iframeSrc', value: '', display: '', type: 'string', addConfig: { label: 'css或者xpath选择器', placeholder: \"请输入css选择器或xpath选择器 xpath 示例：//*[@id='test']\", elementLibrarySupport: true, type: 'textarea' } } },",-1),e("pre",null,[e("code",null,`outputs: {
    elements: {
        name: '',
        display: '数组-元素列表',
        type: 'array',
        addConfig: {
            label: '元素列表',
            type: 'variable',
            defaultValue: 'elements'
        }
    },
    elementCount: {
        name: '',
        display: '数字-元素个数',
        type: 'number',
        addConfig: {
            label: '元素个数',
            type: 'variable',
            defaultValue: 'elementCount'
        }
    }
}
`)],-1),e("p",null,"};",-1),e("p",null,[n("export const impl = async function ({ browserPage, selector }: { browserPage: Page; selector: string; }) { if (selector.startsWith('//')) { selector = "),e("code",null,"::-p-xpath(${selector})"),n("; } const elements = await browserPage.$$(selector);")],-1),e("pre",null,[e("code",null,`return { elements, elementCount: elements.length };
`)],-1),e("p",null,"};",-1)]))}const g=a(o,[["render",s]]);export{b as __pageData,g as default};
