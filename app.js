const Koa = require('koa');
const app = new Koa();
const router = require('koa-router')();
const build = require('./build')

router.get('/', (ctx, next) => {
  ctx.body = "ok"
});

router.get('/styles/:id', async (ctx, next) => {
  ctx.body = ctx.params.id
  ctx.body += build.getStyle()
});

router.get('/scripts/:id', async (ctx, next) => {
  ctx.body = ctx.params.id
  ctx.body += build.getScript()
});

router.get('/htmls/:id', async (ctx, next) => {
  ctx.body = ctx.params.id
  ctx.body += build.getHtml()
});

router.get('/modules/:id', async (ctx, next) => {
  ctx.body = ctx.params.id
  ctx.body += build.getModule()
});

app.use(router.routes());

app.listen(3000)