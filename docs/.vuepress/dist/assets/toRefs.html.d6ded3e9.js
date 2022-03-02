import{p as n}from"./app.fad36ee9.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="torefs" tabindex="-1"><a class="header-anchor" href="#torefs" aria-hidden="true">#</a> toRefs</h1><p>\u6269\u5C55\u4E4B\u540E\u7684 toRefs\uFF0C\u5141\u8BB8\u63A5\u53D7\u5BF9\u8C61\u578B\u7684 ref</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> toRefs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/uni_modules/tob-use&#39;</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> a<span class="token punctuation">,</span> b <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">toRefs</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span> c<span class="token punctuation">,</span> d <span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">toRefs</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><code>ref</code> \u7C7B\u578B\u7684\u4E5F\u652F\u6301</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> toRefs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/uni_modules/tob-use&#39;</span>

<span class="token keyword">const</span> objRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span> a<span class="token operator">:</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> arrRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> a<span class="token punctuation">,</span> b <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">toRefs</span><span class="token punctuation">(</span>objRef<span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span> c<span class="token punctuation">,</span> d <span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">toRefs</span><span class="token punctuation">(</span>arrRef<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,6);function t(e,o){return p}var l=s(a,[["render",t]]);export{l as default};
