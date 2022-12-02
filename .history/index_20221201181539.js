const Koa = require("koa");
const Routor = require("koa-router");
const bodyparser = require("koa-bodyparser");
const app = new Koa();
const router = new Routor();

app.use(bodyparser);
router.get("/login", async (ctx) => {
  console.log("login");
});

app.use(router.routes());

app.use(async (ctx) => {
  ctx.body = "Hello World";
});

app.listen(3000);
