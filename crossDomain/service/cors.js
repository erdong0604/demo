const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();

router.post('/cors', async (ctx) => {
    console.log(ctx.request)
    let origin = ctx.request.header.origin;
    ctx.set('Access-Control-Allow-Origin', origin);
    ctx.set('Access-Control-Allow-Credentials', true);
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    ctx.response.body = ctx.request;
});

app.use(router.routes());
app.listen(3001);