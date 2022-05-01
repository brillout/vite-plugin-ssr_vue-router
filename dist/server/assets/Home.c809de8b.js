"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
var vue = require("vue");
var pluginVue_exportHelper = require("./plugin-vue_export-helper.db096aab.js");
var Home_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><h1 data-v-da3b3b9e>Home</h1><p data-v-da3b3b9e>This content is rendered to HTML.</p><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Home = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-da3b3b9e"]]);
exports["default"] = Home;
