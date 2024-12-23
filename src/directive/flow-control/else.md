# Else

如果不满足前面的 IF 指令中指定的条件，则执行 Else 指令中的操作。

![else](/img/flow-control/else.png)

### 使用示例

![else-example](/img/flow-control/else-example.png)

> 此流程执行逻辑：设置整数变量值为 10 --&gt; 使用【IF 条件】指令判断变量是否大于 50 --&gt; 若满足条件则执行【输出日志】指令打印“满足条件执行此操作” --&gt; 否则执行【输出日志】指令打印“不满足条件时支持此操作”

### 示例代码

拷贝以下代码到 Tuzi 编辑器中，并运行：

```
//tuziRpaNobwRAdghgtgpmAXGAJlALlACgJwPYDGcAzsQJYQDmAdMXOgGpQ5lQBGANggDSpnEAHDlACeAOVgJkgPujAdv6AN5UDziWF78Awngjp8HJADMoHOquIatOgKIQU+w8bAE8MeFqRg5AEhAA3ZgBURATgAXyUAAi9fHAl4YLDAHgVALjkIn2YmDgBXEJUwCgEM9GIkcCiAoOLISTclQG8fQGj1HN9MqUgMmDY4HByUfiFRN0AHU0B1bRz0QJbibQpKHKgUFDM9MhnEcGEO3WRaht4x8uQ6LgJ0HJw4AEcMsjObRG0s3hQ4AwyORkMst0mWKlGyATcgEgEwCXRtscngBOgyJoiohQGB1nBNmBAOGmgBpzRofCZTX7BbhrdhIwYjXhNT7ICBtDpdPEEjZuABWxE0gE/tQCGMZjmozmRAAPJsBlgWkIwnIwDfcoB4Q3ZnPJYCgEBEQoAusE8WAoulyeBoPBqop4jKWgBGAAMo3GXxxM14cwWmiWKzpRK2+vN+zA32m3WeUFe7y5yCFqt4eAK+UKFSiMSk2qqyGGbuxP2tfEEwkV8ZJcvmi2WFURyKUgFgVRNuKKsTg8VA+v2alrl9hcINqgDWcAzHpEkzgMGoaEwuEIJHIVFo9CYLEbVYMZEyZwAytoMHBKB30J0YBRlzkyLcwABmACccAATGwjXAACwADkvBAArJfD9eoIeAOxzI33vR6Q8ANkPf82BPM1eEcZw4C0ecAAs8AAdzcOQAB5BHlMICGEUgAF4AB11WYCsuDwgA+YYkIAelQiBiPCFCBDQjCoGwvCG0rEiyMo+jqISZI6IYzDiFw/DJzYsBiNNCiqOInJOnwLpA14AQUAAGW8CAkBNEwADE8A4W4DCMEJ8UqXVkD0Dh4LMbRdOoMg9ByNsO2ILt117czLM0ayOGoddJm6Xp02jNwAEktLCQBDc0AN7kd0cdTkDIWKAFo4LgNhEoIM5t14ZkcBORBTRMKydCQe44EKzzLGsWxDLApwXDysBABIlQBa0y8CFOnlFAjTiNqghwDA8BwHqQHa/rrBPOJAHozQAyFUABCNAGmvQAYf8AIM1ABzzBbFsATCVAHMjQAZCMAU7lAGg5QBZk0AHXkdwgcNYXAUbOqNCodRaKKzoGe7SSxNwvGGYJSwOK1Zhze081WMAzkua44FuUrdgtP7kxyAs3HZe7gzAW70EGh64zAQBnRUAb59DTcaTHgC/pkEAck1ADi5X6PX+m1AYgB0Kj2CYkTgY4EdFNx8dOC4rhuEqcAeNHIWhCBYXhMkWiwrDOfpZBAElvanhSltwAEJZd4RHkEAWDklaFYzVeQYmRXlsAqYNkoPuQJC5edMBAHgdZXDetsTNdN+2qf1lXXaQ93tcdynvZdgNcnUrWueQQBQZUAahVLfw0OIDwKFw495Eddj+OjdyYg/CFqsA6V0qs9dpO88+COzb14ufdD/gxFeXRK/tybAC8vA1a9lJOG44Ju07cHW247pVHhrN46zcGWgxDPrOpPLHTLAZ7ToGef3tD+9QLAFnLXh+m7UZ4HwB3uGvWb5F2TXsAljeTpYTANWAAp0Gg/hbMugpiGodHBuoKWwhllhMIAByfg5c4DALCAAHygWEF+b88if2/rPDGOA/5YgATLEBZd86QJgXA1+X9EGFGQR1VB6DmiYKAaA4gPcOB4NgfAohH8SE/zQf/QB2C8B0OAQASmbCGMMn9ihqhnHOOAi5+rrlXG4dcOBNzQHXDuPcBAQIoD0AQNg942AmgICgJ8f4/zXnvG+Q8bAfwPnmAQN8Jo3zXhyOBeqMF4JuBanxCA6EBJCVYkRMSX0hjBEklxYiYR3GeKYoJFiBEpwkSpkE+UISwmMWYsJQicASKb3idxGaG01obR2gdE651eCyUxgpMASlVJxU0jnHSelBbC3anFUqwpHpuH7NgfARBSDTGoBZSguAKAnBJmmUQQVkCAGT4wAX4qAFPTQA6/oxU0G4BKmhkqpXSplJR5VzC6WqvYdQFVdJWH0nYMqDg6qQQatMlIXBvBIjiIAcr9ADUSvMsI3AwiAFDFQAndqIBSLFdcWgfqqBYddBEcA7mbFjIvW5RJ16ygoHoPA/lRkdkAIfygB7Axpp6X4+9cyOlBnzCGUN87nzcPM6Z9QsVsw5jPKEMIkDwgDhiwm8VGZIuFAHQAwDGAFXoll1Y2AZBmByyOYBABm0YAKRU+VwWYOpYVZtACYqYAe+i+WlJpCPasLxx6uwRUi3Y/wyVzOmc86e5ytCXIXi0QAgZHTMACFu3y+WAEO7QAzbFRT2oAE2szpYrptmA+TMQYB2mfaxSwgiCwT0p0NwgB36ImYAU0VrVTLtV8mm64AAemBMrek1f6WUfwASTKmfa1UapQzoCuiI3gjkvguR7H2DAnShw9NHP0wZrheBiIyAuJc0i1wbi3Fs3Ie49BGP3PuaxUB7zPhPJec8142DXmfD+PQU79xvhQCuvQW9HGXOcQhfNoSqLhJST49JYkMVZJCc8157zvm/KSV4qJIlfHEWda63aHrTrnpkjgOSbgciVLUkgI02ldInMMq07G7k4JFRskiOgyK+jiGxhYQyiy4q5CSilNKGU4BZQ9INPKRogM52g5saGOdkNwbuCS4jhyODHL2WcrdrhkDTQKUdT1wKy2rGLUIiM3GK3tird2NyFkoO0eoLB6cUBZwdokV2lcPb5F9qrLuNw14jHXg0W+R8l4Tx/kvHodRc63yXkvN+Od9412XiNF1BxFyoKwV3WAVje12PFLAKq39ikVIAcQDU/gdTiWNKCM0/O4HF4dMHN0kcNBm0/GGamBD4ywDTPmah5ZGH1nYdwwcnZmwDL7NMLR+jiACuMfs1cqZNzwX3LCJeuZbzPk/L+Z5S5QKw5cbWDVyFJkWgwr7tnHV8H0xuGZTDd02KUy2jxRUMG/NIYNLOQHclUzKXjdZkcBLEI6XiwZU6ZEY2E7wrZfHLlvK4UtCeAKoVxkA4SqlTK07IqlUqu/ZjYI6qnhZonqyxFuaDVGqeSa/55qQZtOQPGxNfKdYvsioAN9NAD0poAQGN31er3j6mb/qRWBqTcGqAoaQMRuQNGuNtqg3b1htvOAabmA4czb6LVod/v5sLajEtnXWyCYONW3skWunDl6XFoZOR22dqkQp2RvbFEqcHTZlAf5NFsH3FAWxl59FsCgHp1Rhj2BPn3Lp9gdmIIOZcXuu9ETvHRNEsRM9nEEl1ZeQ169zXzdHqt0+mHLr4fI/fZ+kpb35JgD/T5uKRGAsgYY8KVTyBN6AT0HAfc14CCmj0LpjX559xTvvA+E02ek9QA3cHqpGleDg+vqJkjtk9ASaqgJpyPPqCQcr3ZGvNgRlJaQ2IAAImEUKRv6puEAMt+gB9cyii1HcRW8sMe2V5ErZHiHXR46W4R/HznG/QDuofo/Irj/9z+8p4f6mldOR9oAA==
```
