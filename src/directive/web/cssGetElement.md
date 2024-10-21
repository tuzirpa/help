# 指令名称：CSS或XPath获取元素
## 指令说明：在页面$\{browserPage\}中，使用CSS或XPath选择器$\{selector\}获取元素,超时时间$\{timeout\}秒,并保存到变量$\{webElement\}
## 指令输入：

 | 参数名 | 参数lebel | 参数类型 | 参数填写说明 | 
 | ------------- | ------------- | ------------- | ------------- |
 | browserPage | 网页对象 | variable |  |
 | selector | CSS或XPath选择器 | string | 请输入CSS或XPath选择器 \(例如: \#id, .class, input\[type="text"\], //div/span\) |
 | timeout | 超时时间 | number | 不填写或0禁用超时\(永久等待到元素出现\)，\-1为直接获取（不等待，可能获取不到元素），单位：秒 |


## 指令输出：

 | 参数名 | 参数lebel | 参数类型 | 参数填写说明 | 
 | ------------- | ------------- | ------------- | ------------- |
 | webElement | 元素对象 | web.Element |  |

	