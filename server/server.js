import Koa from 'koa';
import Router from '@koa/router';
import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';
import fetch from 'isomorphic-fetch';

const app = new Koa();
const pages = new Koa();
const router = new Router();
const port = process.env.PORT || 3011;

pages.use(serve(__dirname, "..", "/pages"));
app.use(mount("/", pages));

router.get('/', (ctx) => {
	ctx.body = 'hello!';
});

// app.use(async (ctx, next) => {
// 	await next();
// 	const rt = ctx.response.get('X-Response-Time');
// 	console.log(`${ctx.method} ${ctx.url} - ${rt}`);
// });

// app.use(async (ctx, next) => {
// 	const start = Date.now();
// 	await next();
// 	const ms = Date.now() - start;
// 	ctx.set('X-Response-Time', `${ms}ms`);
// });

app.use(router.routes());

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
