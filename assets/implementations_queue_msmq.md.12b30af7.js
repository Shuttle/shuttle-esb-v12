import { _ as _export_sfc, c as createElementBlock, o as openBlock, a as createStaticVNode } from "./app.47c85b6c.js";
const __pageData = '{"title":"MSMQ","description":"","frontmatter":{},"headers":[{"level":2,"title":"Installation / Activation","slug":"installation-activation"},{"level":2,"title":"Configuration","slug":"configuration"}],"relativePath":"implementations/queue/msmq.md"}';
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h1 id="msmq" tabindex="-1">MSMQ <a class="header-anchor" href="#msmq" aria-hidden="true">#</a></h1><div class="language-"><pre><code>PM&gt; Install-Package Shuttle.Esb.Msmq\n</code></pre></div><p>All MSMQ queues are required to be <strong>transactional</strong>. In addition to the actual queue a <code>msmq://host/queue$journal</code> queue will <strong>always</strong> be used. If it does not exist it will be created, so if you are creating queues explicitly then remember to create these also.</p><p>MSMQ creates outgoing queues internally so it is not necessary to use an outbox.</p><h2 id="installation-activation" tabindex="-1">Installation / Activation <a class="header-anchor" href="#installation-activation" aria-hidden="true">#</a></h2><p>You need to install / activate MSMQ on your system before using this queuing option.</p><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-hidden="true">#</a></h2><p>Since an instance of the <code>IMsmqConfiguration</code> interface is required remember to register one. Typically the default implementation will do:</p><div class="language-c#"><pre><code><span class="line"><span style="color:#A6ACCD;">IComponentRegistry</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Register</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">IMsmqConfiguration</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MsmqConfiguration</span><span style="color:#89DDFF;">&gt;();</span></span>\n<span class="line"></span></code></pre></div><p>The queue configuration is part of the specified uri, e.g.:</p><div class="language-xml"><pre><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">inbox</span></span>\n<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">workQueueUri</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">msmq://host/queue?useDeadLetterQueue=true</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">	  .</span></span>\n<span class="line"><span style="color:#89DDFF;">	  .</span></span>\n<span class="line"><span style="color:#89DDFF;">	  .</span></span>\n<span class="line"><span style="color:#89DDFF;">    /&gt;</span></span>\n<span class="line"></span></code></pre></div><table><thead><tr><th>Segment / Argument</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>useDeadLetterQueue</td><td>true</td><td>Specifies the value to pass to the &#39;UseDeadLetterQueue&#39; property of the message sent.</td></tr></tbody></table><p>By default the <code>MsmqQueue</code> is a transactional queue that utilizes a journal queue when retrieving messages. Please try not to change the default unless you have carefully considered your choice. Although there is a slight performance penalty the defaults provide a relatively risk-free consumption of the queue.</p><p>In addition to this there is also a Msmq specific section (defaults specified here):</p><div class="language-xml"><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">configuration</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">configSections</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">section</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">msmq</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">type</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Shuttle.Esb.Msmq.MsmqSection, Shuttle.Esb.Msmq</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">configSections</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span></span>\n<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">msmq</span></span>\n<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#C792EA;">localQueueTimeoutMilliseconds</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">	</span><span style="color:#C792EA;">remoteQueueTimeoutMilliseconds</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2000</span><span style="color:#89DDFF;">&quot;</span></span>\n<span class="line"><span style="color:#89DDFF;">  /&gt;</span></span>\n<span class="line"><span style="color:#A6ACCD;">  .</span></span>\n<span class="line"><span style="color:#A6ACCD;">  .</span></span>\n<span class="line"><span style="color:#A6ACCD;">  .</span></span>\n<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">configuration</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"></span></code></pre></div>', 15);
const _hoisted_16 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_16);
}
var msmq = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { __pageData, msmq as default };