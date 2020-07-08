const Koa = require('koa');
const app = new Koa();
const server = require('http').Server(app.callback());
const io = require('socket.io')(server);
const port = 3002;

const Router = require('koa-router');
const router = new Router();

router.get('/', async (ctx) => {
    let origin = ctx.request.header.origin;
    ctx.set('Access-Control-Allow-Origin', origin);
    ctx.set('Access-Control-Allow-Credentials', true);
    ctx.response.body = '222333';
});



io.on('connection', socket => {
    console.log('链接成功')
    socket.on('message',(msg) => {
        socket.emit('message',`你的消息是${msg},服务端的消息是：哈哈哈`)
    })
    
})
app.use(router.routes());

server.listen(port, () => {
})