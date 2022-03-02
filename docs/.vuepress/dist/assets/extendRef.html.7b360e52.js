import{p as n}from"./app.fad36ee9.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="extendref" tabindex="-1"><a class="header-anchor" href="#extendref" aria-hidden="true">#</a> extendRef</h1><p>ref \u6269\u5C55</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> extendRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/uni_modules/tob-use&#39;</span>

<span class="token keyword">const</span> myRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;content&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> extended <span class="token operator">=</span> <span class="token function">extendRef</span><span class="token punctuation">(</span>myRef<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;extra data&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

extended<span class="token punctuation">.</span>value <span class="token operator">===</span> <span class="token string">&#39;content&#39;</span>
extended<span class="token punctuation">.</span>foo <span class="token operator">===</span> <span class="token string">&#39;extra data&#39;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><code>ref</code> \u5C06\u88AB\u89E3\u5305\u5E76\u4E14\u662F\u54CD\u5E94\u5F0F\u7684</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> myRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;content&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> extraRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;extra&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> extended <span class="token operator">=</span> <span class="token function">extendRef</span><span class="token punctuation">(</span>myRef<span class="token punctuation">,</span> <span class="token punctuation">{</span> extra<span class="token operator">:</span> extraRef <span class="token punctuation">}</span><span class="token punctuation">)</span>

extended<span class="token punctuation">.</span>value <span class="token operator">===</span> <span class="token string">&#39;content&#39;</span>
extended<span class="token punctuation">.</span>extra <span class="token operator">===</span> <span class="token string">&#39;extra&#39;</span>

extended<span class="token punctuation">.</span>extra <span class="token operator">=</span> <span class="token string">&#39;new data&#39;</span> <span class="token comment">// \u5C06\u89E6\u53D1\u6E90\u66F4\u65B0</span>
extraRef<span class="token punctuation">.</span>value <span class="token operator">===</span> <span class="token string">&#39;new data&#39;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,6);function p(t,o){return e}var l=s(a,[["render",p]]);export{l as default};
