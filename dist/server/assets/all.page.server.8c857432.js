"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var serverRenderer = require("@vue/server-renderer");
var vitePluginSsr = require("vite-plugin-ssr");
var vue = require("vue");
var vueRouter = require("vue-router");
function createRouter() {
  return vueRouter.createRouter({
    history: vueRouter.createMemoryHistory(),
    routes: [
      {
        path: "/",
        component: () => Promise.resolve().then(function() {
          return require("./Home.c809de8b.js");
        })
      },
      {
        path: "/about",
        component: () => Promise.resolve().then(function() {
          return require("./About.e30110e9.js");
        })
      }
    ]
  });
}
function createApp({ Page }) {
  const app = vue.createSSRApp(Page);
  const router = createRouter();
  app.use(router);
  return { app, router };
}
async function render(pageContext) {
  const { Page } = pageContext;
  const { app, router } = createApp({ Page });
  router.push(pageContext.url);
  await router.isReady();
  const appHtml = await serverRenderer.renderToString(app);
  return vitePluginSsr.escapeInject`<!DOCTYPE html>
    <html>
      <body>
        <div id="app">${vitePluginSsr.dangerouslySkipEscape(appHtml)}</div>
      </body>
    </html>`;
}
exports.render = render;
