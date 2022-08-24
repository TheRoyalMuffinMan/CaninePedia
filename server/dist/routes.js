"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const koa_router_1 = __importDefault(require("koa-router"));
const koa_static_1 = __importDefault(require("koa-static"));
const koa_mount_1 = __importDefault(require("koa-mount"));
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const cross_fetch_1 = __importDefault(require("cross-fetch"));
const path = require("path");
const app = new koa_1.default();
const pages = new koa_1.default();
const router = new koa_router_1.default();
const port = process.env.PORT || 3011;
app.use((0, koa_static_1.default)(path.join(__dirname, "..", "/pages")));
app.use((0, koa_mount_1.default)('/', pages));
app.use((0, koa_bodyparser_1.default)());
router.get("/list", async (ctx, next) => {
    const response = await (0, cross_fetch_1.default)("https://dog.ceo/api/breeds/list/all");
    const result = await response.json();
    ctx.body = result;
    await next();
});
router.post("/breed", async (ctx, next) => {
    const breed = ctx.request.body.value[0];
    const subBreed = (ctx.request.body.value.length > 1) ? '/' + ctx.request.body.value[1] : '';
    const response = await (0, cross_fetch_1.default)(`https://dog.ceo/api/breed/${breed + subBreed}/images`);
    const result = await response.json();
    ctx.body = result;
    await next();
});
app
    .use(router.routes())
    .use(router.allowedMethods());
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
