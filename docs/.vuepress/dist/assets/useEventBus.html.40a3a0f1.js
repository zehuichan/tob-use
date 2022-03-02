import{p as n}from"./app.fad36ee9.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="useeventbus" tabindex="-1"><a class="header-anchor" href="#useeventbus" aria-hidden="true">#</a> useEventBus</h1><p>\u4F7F\u7528\u4E8B\u4EF6 bus</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useEventBus <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/uni_modules/tob-use&#39;</span>

<span class="token keyword">const</span> bus <span class="token operator">=</span> <span class="token function">useEventBus</span><span class="token punctuation">(</span><span class="token string">&#39;news&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">listener</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u4E8B\u4EF6: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>event<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u76D1\u542C\uFF0C\u8FD4\u56DE\u53D6\u6D88\u8BA2\u9605\u51FD\u6570</span>
<span class="token keyword">const</span> unsubscribe <span class="token operator">=</span> bus<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span>listener<span class="token punctuation">)</span>

<span class="token comment">// \u89E6\u53D1</span>
bus<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;\u89E6\u53D1&#39;</span><span class="token punctuation">)</span> <span class="token comment">// \u8F93\u51FA &#39;\u4E8B\u4EF6: \u89E6\u53D1&#39;</span>

<span class="token comment">// \u5378\u8F7D\u4E4B\u524D\u6CE8\u518C\u7684\u4E8B\u4EF6\u56DE\u8C03</span>
<span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// \u6216\u8005\u7528 bus.off</span>
bus<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span>listener<span class="token punctuation">)</span>

bus<span class="token punctuation">.</span><span class="token function">once</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u4E00\u6B21\u6027\u4E8B\u4EF6&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

bus<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u8F93\u51FA: \u4E00\u6B21\u6027\u4E8B\u4EF6</span>

bus<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u5565\u90FD\u4E0D\u505A</span>

<span class="token comment">// \u6E05\u7406\u6240\u6709\u7684\u4E8B\u4EF6\u56DE\u8C03</span>
bus<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div>`,4);function t(e,c){return p}var l=s(a,[["render",t]]);export{l as default};
