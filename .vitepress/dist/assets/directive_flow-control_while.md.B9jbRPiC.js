import{_ as o,c as e,a3 as t,o as l}from"./chunks/framework.DpY-CtK9.js";const i="/img/flow-control/while.png",a="/img/flow-control/while-example.png",n=JSON.parse('{"title":"While 条件循环","description":"","frontmatter":{},"headers":[],"relativePath":"directive/flow-control/while.md","filePath":"directive/flow-control/while.md"}'),g={name:"directive/flow-control/while.md"};function s(B,A,w,r,c,p){return l(),e("div",null,A[0]||(A[0]=[t('<h1 id="while-条件循环" tabindex="-1">While 条件循环 <a class="header-anchor" href="#while-条件循环" aria-label="Permalink to &quot;While 条件循环&quot;">​</a></h1><p>当条件为真时，对一组指令进行循环操作。</p><p><img src="'+i+'" alt="alt while" data-fancybox="gallery"></p><p><strong>对象 1</strong></p><ul><li><p>可在文本输入模式下直接输入文本</p></li><li><p>可通过 选择之前已经创建的变量</p></li></ul><p><strong>关系</strong></p><p>选择对象 1 与对象 2 的比较方式，如：&quot;对象 1 大于对象 2&quot;、&quot;对象 1 包含对象 2&quot;、&quot;对象 1 以对象 2 开头&quot;等方式</p><p><strong>对象 2</strong></p><p>内容的输入方式与对象 1 相同，当判断条件只需要一个对象时，对象 2 可缺省，如：&quot;对象 1 等于 True&quot;、&quot;对象 1 是空值&quot;等方式</p><h3 id="使用示例" tabindex="-1">使用示例 <a class="header-anchor" href="#使用示例" aria-label="Permalink to &quot;使用示例&quot;">​</a></h3><p><img src="'+a+'" alt="alt while" data-fancybox="gallery"></p><blockquote><p>此流程执行逻辑：设置整数变量值为 10 --&gt; 【While 条件循环】判断条件是否成立 --&gt; 若成立则执行【输出日志】指令打印&quot;数字&quot;并修改&quot;数字&quot;变量增加 10 --&gt; 直至条件不成立则循环结束</p></blockquote><h3 id="示例代码" tabindex="-1">示例代码 <a class="header-anchor" href="#示例代码" aria-label="Permalink to &quot;示例代码&quot;">​</a></h3><p>拷贝以下代码到 Tuzi 编辑器中，并运行：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>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</span></span></code></pre></div>',15)]))}const Q=o(g,[["render",s]]);export{n as __pageData,Q as default};
