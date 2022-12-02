/**
 * 一个真实的jwt
 * eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.IjEyMyI.8fFuqI5Bqi_RbHWoO2KtYXbiIQwkRhCWsNur1U_jYME
 */
module.exports = {
  toBase64(content) {
    const base64 = Buffer.from(JSON.stringify(content)).toString("base64");
    console.log(base64);
    return base64;
  },
  toBase64Escape(base64) {
    return base64.replace(/\+/g, "-").replace(/\//g, "").replace(/=/g, "");
  },
  decode() {},
  encode(content, secret) {
    return this.toBase64({ typ: "JWT", alg: "HS256" });
  },
};
