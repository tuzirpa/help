# 继续下一次循环

忽略本次循环，继续下一次循环。

![alt continue](/img/flow-control/continue.png)

> 注：【**继续下一次循环**】主要是对【**For 次数循环**】、【**While 循环**】、【**循环相似元素**】等循环指令进行动态的控制

### 使用示例

![alt continue](/img/flow-control/continue-example.png)

此示例中，输入日志打印了 20、40、50 没有 30 --&gt; 因为 IF 指令条件判断数字等于 30 时执行了继续下一次循环指令 --&gt; 导致忽略本次循环，进入了下次循环

### 示例代码

拷贝以下代码到 Tuzi 编辑器中，并运行：

```
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
```
