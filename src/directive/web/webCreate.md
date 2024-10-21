# 指令名称：创建浏览器
## 指令说明：启动$\{webType\}并打开$\{url\},保存至：$\{browser\}
## 指令输入：

 | 参数名 | 参数lebel | 参数类型 | 参数填写说明 | 
 | ------------- | ------------- | ------------- | ------------- |
 | webType | 浏览器类型 | string |  |
 | executablePath | 浏览器路径 | string | 如填写请输入浏览器路径，如：C:/Program Files \(x86\)/Google/Chrome/Application/chrome.exe |
 | url | 地址 | string | 选填，如填写请输入地址 如：http://www.baidu.com 或 https://www.taobao.com |
 | loadTimeout | 超时 | number | 不填或填0表示一直等待到加载完成，打开url超时时间，单位：秒 |
 | userDataDir | 用户目录 | string | 记录 cookie、缓存、用户登录数据等（比如 网站的登录状态）。 |


## 指令输出：

 | 参数名 | 参数lebel | 参数类型 | 参数填写说明 | 
 | ------------- | ------------- | ------------- | ------------- |
 | browser | 浏览器对象 | web.browser |  |
 | page | 标签页对象 | web.page |  |

	