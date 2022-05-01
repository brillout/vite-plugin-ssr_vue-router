"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var vue = require("vue");
var serverRenderer = require("vue/server-renderer");
var all_page_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __ssrInlineRender: true,
  setup(__props) {
    const state = vue.reactive({ count: 0 });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = vue.resolveComponent("router-link");
      const _component_router_view = vue.resolveComponent("router-view");
      _push(`<!--[--><div>`);
      _push(serverRenderer.ssrRenderComponent(_component_router_link, { to: "/" }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Home`);
          } else {
            return [
              vue.createTextVNode("Home")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` | `);
      _push(serverRenderer.ssrRenderComponent(_component_router_link, { to: "/about" }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`About`);
          } else {
            return [
              vue.createTextVNode("About")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_router_view, null, {
        default: vue.withCtx(({ Component }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer.ssrRenderSuspense(_push2, {
              default: () => {
                serverRenderer.ssrRenderVNode(_push2, vue.createVNode(vue.resolveDynamicComponent(Component), null, null), _parent2, _scopeId);
              },
              _: 2
            });
          } else {
            return [
              (vue.openBlock(), vue.createBlock(vue.Suspense, null, {
                default: vue.withCtx(() => [
                  (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(Component)))
                ]),
                _: 2
              }, 1024))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div><button>count is: ${serverRenderer.ssrInterpolate(vue.unref(state).count)}</button></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/all.page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports["default"] = _sfc_main;
