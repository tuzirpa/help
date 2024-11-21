import{_ as l,c as a,j as e,o as n}from"./chunks/framework.DpY-CtK9.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"directive/web/fileSelect.md","filePath":"directive/web/fileSelect.md"}'),i={name:"directive/web/fileSelect.md"};function r(o,t,p,s,c,u){return n(),a("div",null,t[0]||(t[0]=[e("p",null,"import { ElementHandle, Page } from 'puppeteer-core'; import { DirectiveTree } from '../types';",-1),e("p",null,"const config: DirectiveTree = { name: 'web.fileSelect', sort: 2, displayName: '选择文件', icon: 'icon-web-create', isControl: false, isControlEnd: false, comment: '在页面${page}选择文件', inputs: { page: { name: 'page', value: '', display: '', type: 'variable', addConfig: { label: '浏览器对象', required: true, type: 'variable', filtersType: 'web.browser', autoComplete: true } } }, outputs: { filePath: { name: '', display: '文件路径', type: 'string', addConfig: { label: '文件路径', type: 'variable', defaultValue: 'filePath' } } } };",-1),e("p",null,"const impl = async function ({ page }: { page: Page }) { const str = await page.evaluate(() => { return new Promise((resolve) => { const input = document.createElement('input'); input.type = 'file'; input.click(); input.onchange = (e: any) => { console.log(e.target.files[0]); resolve(input.value); }; }); });",-1),e("pre",null,[e("code",null,`console.log('选择的文件路径：', str);

return { filePath: str };
`)],-1),e("p",null,"};",-1),e("p",null,"export { config, impl };",-1)]))}const m=l(i,[["render",r]]);export{d as __pageData,m as default};