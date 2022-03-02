import{p as n}from"./app.fad36ee9.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="reactivepick" tabindex="-1"><a class="header-anchor" href="#reactivepick" aria-hidden="true">#</a> reactivePick</h1><p>\u54CD\u5E94\u5F0F\u7684 pick</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> reactivePick <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/uni_modules/tob-use&#39;</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">elementX</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">elementY</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> picked <span class="token operator">=</span> <span class="token function">reactivePick</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;x&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;elementX&#39;</span><span class="token punctuation">)</span> <span class="token comment">// { x: 0, elementX: 0 }</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,4);function p(t,o){return e}var l=s(a,[["render",p]]);export{l as default};
