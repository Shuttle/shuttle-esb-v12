import { _ as _export_sfc, o as openBlock, c as createElementBlock, b as createBaseVNode, e as createVNode, u as unref, V as VTIconShuttle, f as VTIconDiscord, F as Fragment, p as pushScopeId, g as popScopeId, a as createStaticVNode, d as createTextVNode } from "./app.1aa8950f.js";
var Home_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-f0fa4614"), n = n(), popScopeId(), n);
const _hoisted_1 = { id: "hero" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "documentation-redirect" }, [
  /* @__PURE__ */ createTextVNode(" This documentation relates to Shuttle.Esb before v13.0.0 was released. You may wish to view the "),
  /* @__PURE__ */ createBaseVNode("a", { href: "https://shuttle.github.io/shuttle-esb/" }, "latest documentation"),
  /* @__PURE__ */ createTextVNode(". ")
], -1));
const _hoisted_3 = /* @__PURE__ */ createStaticVNode("", 3);
const _hoisted_6 = {
  href: "https://discord.gg/Q2yEsfht6f",
  target: "_blank"
};
const _hoisted_7 = { class: "discord-link" };
const _hoisted_8 = /* @__PURE__ */ createTextVNode("Join our Discord channel ");
const _hoisted_9 = /* @__PURE__ */ createStaticVNode("", 1);
const _sfc_main$1 = {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("section", _hoisted_1, [
          _hoisted_2,
          createVNode(unref(VTIconShuttle), { class: "logo" }),
          _hoisted_3,
          createBaseVNode("p", null, [
            createBaseVNode("a", _hoisted_6, [
              createBaseVNode("div", _hoisted_7, [
                createVNode(unref(VTIconDiscord), { class: "discord-logo" }),
                _hoisted_8
              ])
            ])
          ])
        ]),
        _hoisted_9
      ], 64);
    };
  }
};
var Home = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-f0fa4614"]]);
const __pageData = '{"title":"Home","description":"","frontmatter":{"page":true,"title":"Home"},"headers":[],"relativePath":"index.md"}';
const __default__ = {};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(Home)
      ]);
    };
  }
});
export { __pageData, _sfc_main as default };
