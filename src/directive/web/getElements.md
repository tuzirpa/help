# 指令名称：获取相似元素
## 指令说明：在页面$\{browserPage\}中获取 $\{selector\} 匹配的元素，元素列表保存到$\{elements\},元素个数保存到$\{elementCount\}
## 指令输入：

 | 参数名 | 参数lebel | 参数类型 | 参数填写说明 | 
 | ------------- | ------------- | ------------- | ------------- |
 | browserPage | 标签页对象 | variable | 选择标签页对象 |
 | selector | css或者xpath选择器 | string | 请输入css选择器或xpath选择器 xpath 示例：//\*\[@id='test'\] |


## 指令输出：

 | 参数名 | 参数lebel | 参数类型 | 参数填写说明 | 
 | ------------- | ------------- | ------------- | ------------- |
 | elements | 元素列表 | array |  |
 | elementCount | 元素个数 | number |  |

	