const Koa = require("koa");
const Routor = require("koa-router");
const bodyParser = require("koa-bodyparser");
const jwt = require("jwt-simple");
const app = new Koa();
const router = new Routor();

app.use(bodyParser());
router.post("/login", async (ctx, next) => {
  const { name, password } = ctx.request.body;
  if (name === "123" && password === "123") {
    let token = jwt.encode(name, "oliver");
    ctx.body = {
      err: 0,
      data: { token, name },
    };
  }
});
// postman Authorization type 选择Bearer Token
router.get("/validate", async (ctx) => {
  let authorization = ctx.get("authorization");
  console.log(authorization);
});

app.use(router.routes());
app.listen(3000);
