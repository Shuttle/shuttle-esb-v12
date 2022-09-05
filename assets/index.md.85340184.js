import { _ as _export_sfc, o as openBlock, c as createElementBlock, b as createBaseVNode, e as createVNode, u as unref, V as VTIconShuttle, f as VTIconDiscord, F as Fragment, p as pushScopeId, g as popScopeId, a as createStaticVNode, d as createTextVNode } from "./app.1aa8950f.js";
var Home_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-f0fa4614"), n = n(), popScopeId(), n);
const _hoisted_1 = { id: "hero" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("p", { class: "documentation-redirect" }, [
  /* @__PURE__ */ createTextVNode(" This documentation relates to Shuttle.Esb before v13.0.0 was released. You may wish to view the "),
  /* @__PURE__ */ createBaseVNode("a", { href: "https://shuttle.github.io/shuttle-esb/" }, "latest documentation"),
  /* @__PURE__ */ createTextVNode(". ")
], -1));
const _hoisted_3 = /* @__PURE__ */ createStaticVNode('<h1 class="tagline" data-v-f0fa4614>Autonomous Business Components</h1><p class="description" data-v-f0fa4614> Configurable service bus that provides you with a mechanism to create cross-platform endpoints that are loosely coupled, enabling you to develop and deploy specific business functionality that can be independently versioned. </p><p class="actions" data-v-f0fa4614><a class="why" href="/shuttle-esb-v12/concepts/why.html" data-v-f0fa4614>Why?</a><a class="get-started" href="/shuttle-esb-v12/guide/introduction.html" data-v-f0fa4614> Get Started <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" data-v-f0fa4614><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" data-v-f0fa4614></path></svg></a><a class="upgrade" href="/shuttle-esb-v12/guide/upgrade-12.0.0.html" data-v-f0fa4614>Upgrade</a></p>', 3);
const _hoisted_6 = {
  href: "https://discord.gg/Q2yEsfht6f",
  target: "_blank"
};
const _hoisted_7 = { class: "discord-link" };
const _hoisted_8 = /* @__PURE__ */ createTextVNode("Join our Discord channel ");
const _hoisted_9 = /* @__PURE__ */ createStaticVNode('<section id="highlights" class="vt-box-container" data-v-f0fa4614><div class="vt-box" data-v-f0fa4614><h2 data-v-f0fa4614>Framework Support</h2><div data-v-f0fa4614> Packages currently target <code data-v-f0fa4614>netstandard2.0</code> and <code data-v-f0fa4614>netstandard2.1</code> which means that they can be used with .NET Core 2.1+, .NET Framework 4.6.1+, and .NET 5.0+ </div></div><div class="vt-box" data-v-f0fa4614><h2 data-v-f0fa4614>Multiple Queues</h2><div data-v-f0fa4614> Many popular queueing technologies are supported out-of-the-box but it is possible to implement any queue. </div></div><div class="vt-box" data-v-f0fa4614><h2 data-v-f0fa4614>Open Source</h2><div data-v-f0fa4614> These packages are free open source software licensed under the <a href="https://opensource.org/licenses/BSD-3-Clause" data-v-f0fa4614>3-Clause BSD License</a>. Pull requests are welcome. </div></div></section>', 1);
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
