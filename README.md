## jwt 流程
* 首先发起login接口，从server端拿取token
* 用token换取以及用户的用户名 | 密码 | 过期时间等其他的privateKey，通过jwt-simple（或其他插件）生成jwt code
* server端通过privateKey解析jwt code， 拿到token是正确的，则验证通过