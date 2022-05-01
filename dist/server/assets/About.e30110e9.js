"use strict";
exports[Symbol.toStringTag] = "Module";
var serverRenderer = require("vue/server-renderer");
var vue = require("vue");
var pluginVue_exportHelper = require("./plugin-vue_export-helper.db096aab.js");
var About_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = {
  async setup() {
    return {
      msg: "About"
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><h1 data-v-30e9affc>${serverRenderer.ssrInterpolate($setup.msg)}</h1><p data-v-30e9affc>The count is preserved when switching between &quot;Home&quot; and &quot;About&quot;.</p><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/About.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var About = /* @__PURE__ */ pluginVue_exportHelper._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-30e9affc"]]);
exports["default"] = About;
