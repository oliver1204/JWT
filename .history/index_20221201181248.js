const Koa = require("koa");
const Routor = require("koa-router");
const bodyparser = require("koa-bodyparser");
const app = new Koa();
const router = new Routor();

app.use(bodyparser);
router.get("/login", async (ctx) => {});

app.use(router.routes());
app.listen(3000);
