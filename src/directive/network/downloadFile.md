# 指令名称：下载文件
## 指令说明：文件$\{url\} 下载到 $\{downloadPath\}/$\{fileName\}
## 指令输入：

 | 参数名 | 参数lebel | 参数类型 | 参数填写说明 | 
 | ------------- | ------------- | ------------- | ------------- |
 | url | 下载链接 | string | 请输入URL |
 | protocolHeader | 协议头 | textarea | 设置请求协议头，例如：<br/>        Accept: application/json, text/plain, \*/\*<br/>        Accept\-Encoding: gzip, deflate, br, zstd<br/>        Accept\-Language: zh\-CN,zh;q=0.9<br/>        Cache\-Control: no\-cache<br/>         |
 | downloadPath | 下载目录 | string |  |
 | fileName | 保存的文件名 | string | 请输入文件名, 留空则使用URL文件名 |


## 指令输出：

 | 参数名 | 参数lebel | 参数类型 | 参数填写说明 | 
 | ------------- | ------------- | ------------- | ------------- |
 | filePath | 文件路径 | string |  |

	