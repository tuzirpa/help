# 指令名称：http请求
## 指令说明：发起http请求,请求方法为$\{method\}
## 指令输入：

 | 参数名 | 参数lebel | 参数类型 | 参数填写说明 | 
 | ------------- | ------------- | ------------- | ------------- |
 | method | 请求方法 | string |  |
 | url | URL | string | 请输入URL |
 | protocolHeader | 协议头 | textarea | 设置请求协议头，例如：<br/>        Accept: application/json, text/plain, \*/\*<br/>        Accept\-Encoding: gzip, deflate, br, zstd<br/>        Accept\-Language: zh\-CN,zh;q=0.9<br/>        Cache\-Control: no\-cache<br/>         |
 | protocolBody | 协议体 | textarea | 提交的数据体 |


## 指令输出：

 | 参数名 | 参数lebel | 参数类型 | 参数填写说明 | 
 | ------------- | ------------- | ------------- | ------------- |
 | resResult | 请求结果 | string |  |

	