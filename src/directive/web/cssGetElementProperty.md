# 指令名称：CSS获取元素属性值
## 指令说明：在$\{browserPage\}页面中，通过CSS选择器$\{selector\},超时时间$\{timeout\}秒, 获取元素属性$\{property\},并保存到变量$\{propertyValue\}
## 指令输入：

 | 参数名 | 参数lebel | 参数类型 | 参数填写说明 | 
 | ------------- | ------------- | ------------- | ------------- |
 | browserPage | 网页对象 | variable |  |
 | selector | 元素选择器 | string | 支持 CSS 例:\#id .class 或 xpath 例://div\[text\(\)="hello"\] |
 | property | 选择获取的属性 | string |  |
 | timeout | 超时时间 | number |  |


## 指令输出：

 | 参数名 | 参数lebel | 参数类型 | 参数填写说明 | 
 | ------------- | ------------- | ------------- | ------------- |
 | propertyValue | 元素属性值 | string |  |

	