import{_ as a,c as i,j as e,o as r}from"./chunks/framework.DpY-CtK9.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"directive/clipboard/getClipboardFilePaths.md","filePath":"directive/clipboard/getClipboardFilePaths.md"}'),n={name:"directive/clipboard/getClipboardFilePaths.md"};function l(o,t,p,s,c,d){return r(),i("div",null,t[0]||(t[0]=[e("p",null,"import { DirectiveTree } from 'tuzirobot/types'; import hmc from 'hmc-win32'; export const config: DirectiveTree = { name: 'clipboard.getClipboardFilePaths', icon: 'icon-web-create', displayName: '读取剪贴板中的文件列表', comment: '读取剪贴板中的文件列表', inputs: {},",-1),e("pre",null,[e("code",null,`outputs: {
    filePaths: {
        name: '',
        display: '文件路径列表-数组',
        type: 'array',
        addConfig: {
            label: '文件路径列表',
            type: 'variable',
            defaultValue: 'filePaths'
        }
    }
}
`)],-1),e("p",null,"};",-1),e("p",null,"export const impl = async function () { const filePaths = hmc.getClipboardFilePaths(); return { filePaths }; };",-1)]))}const u=a(n,[["render",l]]);export{f as __pageData,u as default};
