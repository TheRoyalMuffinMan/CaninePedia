import Koa from 'koa';
import Router from 'koa-router';
import serve from 'koa-static';
import mount from 'koa-mount';
import json from 'koa-json';
import KoaLogger from 'koa-logger';
import bodyParser from 'koa-bodyparser';
import fetch from 'cross-fetch';
const path: any = require('path');

const app: Koa = new Koa();
const pages: Koa = new Koa();
const router: Router = new Router();
const port: string | number = process.env.PORT || 3011;

app.use(serve(path.join(__dirname, "..", "/pages")));
app.use(mount("/", pages));
app.use(bodyParser());
app.use(json());
app.use(KoaLogger());

router.get('/list', async (ctx: Koa.ParameterizedContext, next: Koa.Next) => {
  const response: Response = await fetch("https://dog.ceo/api/breeds/list/all");
  const result: Body = await response.json();
  ctx.body = result;
  await next();
});

router.post('/breed', async (ctx: Koa.ParameterizedContext, next: Koa.Next): Promise<any> => {
  const breed: string = ctx.request.body.value[0]
  const subBreed: string = (ctx.request.body.value.length > 1) ? '/' + ctx.request.body.value[1] : '';
  const response: Response = await fetch(`https://dog.ceo/api/breed/${breed + subBreed}/images`);
  const result: Body = await response.json();
  ctx.body = result;
  await next();
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
