import{p as n}from"./app.fad36ee9.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="watchatmost" tabindex="-1"><a class="header-anchor" href="#watchatmost" aria-hidden="true">#</a> watchAtMost</h1><p>\u9650\u5236\u6B21\u6570\u578B\u76D1\u542C</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> watchAtMost <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/uni_modules/tob-use&#39;</span>

<span class="token keyword">const</span> source <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">changed</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;trigger!&#39;</span><span class="token punctuation">)</span> 

<span class="token keyword">const</span> stop <span class="token operator">=</span> <span class="token function">watchAtMost</span><span class="token punctuation">(</span>
  source<span class="token punctuation">,</span>
  changed<span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token comment">// \u6700\u591A\u89E6\u53D1 3 \u6B21</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><br><h3 id="watch-\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#watch-\u9009\u9879" aria-hidden="true">#</a> Watch \u9009\u9879</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> watchAtMost <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/uni_modules/tob-use&#39;</span>

<span class="token keyword">const</span> source <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;old&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">changed</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;trigger!&#39;</span><span class="token punctuation">)</span> 

<span class="token function">watchAtMost</span><span class="token punctuation">(</span>source<span class="token punctuation">,</span> changed<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u6DF1\u5EA6\u540C\u6B65</span>
    <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u7ACB\u5373\u540C\u6B65\uFF0C\u9ED8\u8BA4\u4E3A false</span>
    <span class="token literal-property property">flush</span><span class="token operator">:</span> <span class="token string">&#39;sync&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u540C\u6B65\u65F6\u673A\uFF0C\u652F\u6301 pre\uFF0Cpost\uFF0Csync\uFF0C\u9ED8\u8BA4\u4E3A pre</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,7);function t(e,o){return p}var l=s(a,[["render",t]]);export{l as default};
