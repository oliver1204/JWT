/**
 * 一个基于jwt-simple的真实的jwt
 * line1: 要签名的类型
 * line2: 签名的内容
 * line3: 签名
 * eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.IjEyMyI.8fFuqI5Bqi_RbHWoO2KtYXbiIQwkRhCWsNur1U_jYME
 */
module.exports = {
  sigin(str, secret) {
    return require("crypto")
      .createHmac("sha256", secret)
      .update(str)
      .digest("base64");
  },
  toBase64(content) {
    const base64 = Buffer.from(JSON.stringify(content)).toString("base64");
    // toString("base64") 末尾都带 '=' 是需要去掉的
    return this.toBase64Escape(base64);
  },
  toBase64Escape(base64) {
    return base64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
  },
  base64urlUnescape() {
    str += new Array(5 - (str.length % 4)).join("=");
    return str.replace(/\-/g, "+").replace(/_/g, "/");
  },
  // 内容 = 签名
  decode(token, privateKey) {
    const [line1, line2, line3] = token.slit(".");
    if (this.sign([line1, line2].join("."), privateKey) === line3) {
      // 此时的内容一定是可靠的，用户id => 用户信息 =>
      console.log(line2);
      return Buffer.from(this.base64urlUnescape(line2), "base64").toString();
    } else {
      throw new Error("被修改过了");
    }
  },
  encode(content, privateKey) {
    let line1 = this.toBase64({ typ: "JWT", alg: "HS256" });
    let line2 = this.toBase64(content);
    let line3 = this.sign([line1, line2].join(""), privateKey);
    console.log("line1", line1);
    console.log("line2", line2);
    console.log("line3", line3);
    return `${line1}.${line2}.${line3}`;
  },
};
