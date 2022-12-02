/**
 * 一个基于jwt-simple的真实的jwt
 * eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.IjEyMyI.8fFuqI5Bqi_RbHWoO2KtYXbiIQwkRhCWsNur1U_jYME
 */
module.exports = {
  sigin(str, secret) {},
  toBase64(content) {
    const base64 = Buffer.from(JSON.stringify(content)).toString("base64");
    // toString("base64") 末尾都带 '=' 是需要去掉的
    return this.toBase64Escape(base64);
  },
  toBase64Escape(base64) {
    return base64.replace(/\+/g, "-").replace(/\//g, "").replace(/=/g, "");
  },
  decode() {},
  encode(content, secret) {
    let line1 = this.toBase64({ typ: "JWT", alg: "HS256" });
    let line2 = this.toBase64(content);
    let line3 = this.sign([line1, line2].join(""), secret);
    console.log("line1", line1);
    console.log("line2", line2);
    console.log("line3", line3);
  },
};
