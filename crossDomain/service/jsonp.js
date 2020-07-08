const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();

router.get('/jsonp', async (ctx) => {
    let callbackName = ctx.query.cb || 'cb';
    returnData = {
        success:true
    }
    let jsonpStr = `;${callbackName}(${JSON.stringify(returnData)})`;
    ctx.type = 'text/javascript';
    ctx.response.body = jsonpStr;
});

app.use(router.routes());
app.listen(3000);