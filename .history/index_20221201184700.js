const Koa = require("koa");
const Routor = require("koa-router");
const bodyParser = require("koa-bodyparser");
// const jwt = require('jwt-simple')
const app = new Koa();
const router = new Routor();

app.use(bodyParser());
router.post("/login", async (ctx, next) => {
  const { name, password } = ctx.request.body;
  console.log(ctx.request);
});

app.use(router.routes());

app.use(async (ctx) => {
  ctx.body = "Hello World";
});

app.listen(3000);
