# 指令名称：从文本中提取内容
## 指令说明：使用正则表达式从文本中提取内容，匹配方式 $\{extractionWay\},自定义正在$\{regexpValue\},是否匹配第一个$\{isMatchFirst\},是否区分大小写$\{isCaseSensitive\}
## 指令输入：

 | 参数名 | 参数lebel | 参数类型 | 参数填写说明 | 
 | ------------- | ------------- | ------------- | ------------- |
 | text | 文本内容 | string | 文本内容 |
 | extractionWay | 提取方式 | string |  |
 | regexpValue | 自定义正则 | string | 自定义正则 /\d\+/ |
 | isMatchFirst | 是否匹配第一个 | number |  |
 | isCaseSensitive | 是否区分大小写 | number |  |


## 指令输出：

 | 参数名 | 参数lebel | 参数类型 | 参数填写说明 | 
 | ------------- | ------------- | ------------- | ------------- |
 | matchResult | 匹配的内容 | string |  |

	