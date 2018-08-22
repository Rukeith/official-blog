const Koa = require('koa');
const next = require('next');
const Router = require('koa-router');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();

  router.get('/intro', async (ctx) => {
    await app.render(ctx.req, ctx.res, '/intro', ctx.query);
    ctx.respond = false;
  });

  router.get('/p/:id', async (ctx) => {
    await app.render(ctx.req, ctx.res, '/post', { id: ctx.params.id });
    ctx.respond = false;
  });

  router.get('*', async (ctx) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.use(async (ctx, nextProcess) => {
    ctx.res.statusCode = 200;
    await nextProcess();
  });

  server.use(router.routes());
  server.listen(port, () => console.info(`> Ready on http://localhost:${port}`));
});
