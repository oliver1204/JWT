const Koa = require('koa');
const Routor = require('koa-router');
const bodyparser = require('koa-bodyparser');
const app = new Koa();
const router = new Routor();

app.use(bodyparser);
router.post('/login', async(ctx, next) => {
  console.log(ctx);
})

app.use(router.routes());
app.listen(3000)