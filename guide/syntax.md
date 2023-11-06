# 마크다운 문법

슬라이드는 **하나의 마크다운 파일** (기본값 `./slides.md`) 안에 작성됩니다.

일반적인 [마크다운 기능](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)을 그대로 사용할 수 있으며, 심지어 HTML과 Vue 컴포넌트를 인라인으로 사용할 수 있습니다! [UnoCSS](/custom/config-unocss)를 사용하여 스타일을 지정할 수도 있습니다. 새 줄로 구분된 `---`을 사용하여 슬라이드를 구분합니다.

~~~md
# Slidev

Hello, World!

---

# Page 2

Directly use code blocks for highlighting

//```ts
console.log('Hello, World!')
//```

---

# Page 3

You can directly use Windi CSS and Vue components to style and enrich your slides.

<div class="p-3">
  <Tweet id="20" />
</div>
~~~

## Front Matter 및 레이아웃

레이아웃과 슬라이드의 다른 메타데이터를 지정하려면 구분자를 [front matter 블록](https://jekyllrb.com/docs/front-matter/)으로 변환하여 각 슬라이드에 대한 레이아웃 및 기타 메타데이터를 지정하십시오. 각 frontmatter는 세 개의 대시로 시작하고 또 다른 대시로 끝납니다. 그 사이의 텍스트는 [YAML](https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started/) 형식의 데이터 객체입니다. 예를 들면:

~~~md
---
layout: cover
---

# Slidev

This is the cover page.

---
layout: center
background: './images/background-1.png'
class: 'text-white'
---​

# Page 2

This is a page with the layout `center` and a background image.

---

# Page 3

This is a default page without any additional metadata.
~~~

[커스터마이징](/custom/)에 대한 자세한 내용은 커스터마이징을 참조하십시오.

## 코드 블록

슬라이드를 만들 때 코드를 깔끔하게 보여주는 것이 중요합니다. Slidev에서는 당연히 코드 블록을 사용할 수 있습니다.

~~~ts
//```ts
console.log('Hello, World!')
//```
~~~

[Prism](https://prismjs.com)과 [Shiki](https://github.com/shikijs/shiki)를 문법 강조기로 지원합니다. 자세한 내용은 [문법 강조기](/custom/highlighters) 섹션을 참조하십시오.

### 특정 줄 강조

특정한 줄을 강조하고 싶다면, 중괄호 `{}` 안에 줄 번호를 추가하십시오. 줄 번호는 1부터 시작합니다.

~~~ts
//```ts {2,3}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
//```
~~~

`lineNumbers: true`를 설정하면 모든 슬라이드에 줄 번호를 활성화할 수 있습니다. 또는 각 코드 블록에 `{lines:true}`를 설정하여 개별적으로 활성화할 수도 있습니다. `lineNumbers: true`일 때 특정 블록에 대해 번호를 비활성화하려면 해당 블록에 `lines:false`를 설정하십시오.

~~~ts
//```ts {2,3} {lines:true}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
//```
~~~

또한, 각 코드 블록에 시작 줄을 설정하고 해당 줄을 강조할 수도 있습니다. 기본값은 1입니다.

~~~ts
//```ts {6,7} {lines:true, startLine:5}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
//```
~~~

하이라이트를 여러 단계로 변경하려면 `|`를 사용하여 단계를 구분하십시오. 예를 들어:

~~~ts
//```ts {2-3|5|all}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
//```
~~~

이 예제는 먼저 `a: Ref<number> | number`와 `b: Ref<number> | number`를 강조하고, 그 다음 `return computed(() => unref(a) + unref(b))`를 강조하고, 마지막으로 전체 블록을 강조합니다. [클릭 애니메이션 가이드](/guide/animations)에서 자세히 알아보십시오.

어떤 줄도 강조하지 않으려면 줄 번호를 `0`으로 설정하십시오. 예를 들어:

~~~ts {0}
//```ts {0}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
//```
~~~

만일 코드가 한 슬라이드에 맞지 않는다면, `maxHeight` 옵션을 추가하여 고정 높이를 설정하고 스크롤을 활성화할 수 있습니다.

~~~ts {2|3|7|12}
//```ts {2|3|7|12} {maxHeight:'100px'}
function add(
  a: Ref<number> | number,
  b: Ref<number> | number
) {
  return computed(() => unref(a) + unref(b))
}
/// ...as many lines as you want
const c = add(1, 2)
//```
~~~

### Monaco Editor

만일 코드를 편집하고 싶다면, 언제든지 언어 ID 뒤에 `{monaco}`를 추가하십시오. 이렇게 하면 블록이 완전한 기능을 갖춘 Monaco 편집기로 변환됩니다!

~~~ts
//```ts {monaco}
console.log('HelloWorld')
//```
~~~

[Monaco 에디터 설정](/custom/config-monaco)에 대해 더 자세히 알아보세요.

### Monaco diff

Monaco는 두 코드 블록 간의 차이점을 생성할 수도 있습니다. 블록을 [diff Monaco 에디터](https://microsoft.github.io/monaco-editor/playground.html?source=v0.36.1#example-creating-the-diffeditor-multi-line-example)로 변환하려면 `{monaco-diff}`를 사용하고 `~~~`로 원본과 수정된 코드를 구분하십시오!

```md
//```ts {monaco-diff}
This line is removed on the right.
just some text
abcd
efgh
Some more text
~~~
just some text
abcz
zzzzefgh
Some more text.
This line is removed on the left.
//```
```

## 스타일 임베딩

**현재 슬라이드에** 대한 스타일을 임베딩하려면 Markdown에서 `<style>` 태그를 직접 사용하십시오.

```md
# This is Red

<style>
h1 {
  color: red
}
</style>

---

# Next slide is not affected
```

> **참고:** Markdown의 `<style>` 태그는 항상 [scoped](https://vuejs.org/api/sfc-css-features.html#scoped-css)입니다. 이로 인해 자식 선택자 (`.a > .b`)를 사용할 수 없습니다. 이전 링크를 참조하십시오. 전역 스타일을 재정의하려면 [커스터마이징 섹션](/custom/directory-structure#style)을 확인하십시오.

[UnoCSS](/custom/config-unocss)를 통해 제공되는 기능을 사용하여 중첩된 css와 [directives](https://windicss.org/features/directives.html) (예: `@apply`)를 직접 사용할 수 있습니다.

```md
# Slidev

> Hello `world`

<style>
blockquote {
  code {
    @apply text-teal-500 dark:text-teal-400;
  }
}
</style>
```

## 정적 파일

슬라이드에 정적 파일을 포함하려면 마크다운과 마찬가지로 원하는 위치에 이미지를 추가하십시오.

인터넷의 리소스를 사용하면, 내장된 [`vite-plugin-remote-assets`](https://github.com/antfu/vite-plugin-remote-assets)가 첫 번째 실행에서 디스크에 캐시하므로 나중에도 큰 이미지에 대해 즉시 로드할 수 있습니다.

```md
![Remote Image](https://ko.sli.dev/favicon.png)
```

로컬 리소스를 사용하려면 [`public` 폴더](/custom/directory-structure#public)에 넣고 **leading slash**로 참조하십시오.

```md
![Local Image](/pic.png)
```

이미지 크기 혹은 스타일을 변경하려면, `<img>` 태그로 변환할 수 있습니다.

```html
<img src="/pic.png" class="m-40 h-40 rounded shadow" />
```

## 노트

슬라이드에 노트를 추가하려면, 각 슬라이드에 대한 마지막 주석 블록을 사용하십시오. 노트는 [발표 모드](/guide/presenter-mode)에서 참조할 수 있습니다.

마크다운에서 각 슬라이드의 마지막 주석 블록은 노트로 처리됩니다.

~~~md
---
layout: cover
---

# Page 1

This is the cover page.

<!-- This is a note -->

---

# Page 2

<!-- This is NOT a note because it precedes the content of the slide -->

The second page

<!--
This is another note
-->
~~~

## 아이콘

Slidev는 마크다운에서 아이콘을 사용할 수 있습니다. [`unplugin-icons`](https://github.com/antfu/unplugin-icons) 및 [Iconify](https://iconify.design/)를 기반으로 합니다.

아이콘 이름은 [Iconify](https://iconify.design/)의 변환 `{collection-name}-{icon-name}`을 따릅니다. 예를 들어:

- `<mdi-account-circle />` - <mdi-account-circle /> from [Material Design Icons](https://github.com/Templarian/MaterialDesign)
- `<carbon-badge />` - <carbon-badge /> from [Carbon](https://github.com/carbon-design-system/carbon/tree/main/packages/icons)
- `<uim-rocket />` - <uim-rocket /> from [Unicons Monochrome](https://github.com/Iconscout/unicons)
- `<twemoji-cat-with-tears-of-joy />` - <twemoji-cat-with-tears-of-joy /> from [Twemoji](https://github.com/twitter/twemoji)
- `<logos-vue />` - <logos-vue /> from [SVG Logos](https://github.com/gilbarbara/logos)
- 및 기타 등등...

[Icônes](https://icones.js.org/)에서 사용 가능한 아이콘을 찾아보세요.

### 아이콘 스타일링

아이콘은 다른 HTML 요소와 마찬가지로 스타일을 지정할 수 있습니다. 예를 들어:

```html
<uim-rocket />
<uim-rocket class="text-3xl text-red-400 mx-2" />
<uim-rocket class="text-3xl text-orange-400 animate-ping" />
```

<uim-rocket />
<uim-rocket class="text-3xl text-red-400 mx-2" />
<uim-rocket class="text-3xl text-orange-400 animate-ping ml-2" />

## 슬롯

> v0.18부터 사용 가능

슬롯을 사용하여 슬라이드의 특정 부분을 레이아웃에 제공할 수 있습니다. [Vue의 네임드 슬롯](https://v3.vuejs.org/guide/component-slots.html)을 사용하여 여러 기여 지점을 제공할 수도 있습니다.

예를 들어, [`two-cols` 레이아웃](https://github.com/slidevjs/slidev/blob/main/packages/client/layouts/two-cols.vue)에서는 왼쪽 (`default` 슬롯)과 오른쪽 (`right` 슬롯)에 두 개의 열을 나란히 표시할 수 있습니다.

```md
---
layout: two-cols
---

<template v-slot:default>

# Left

This shows on the left

</template>
<template v-slot:right>

# Right

This shows on the right

</template>
```

<div class="grid grid-cols-2 rounded border border-gray-400 border-opacity-50 px-10 pb-4">
<div>
<h3>Left</h3>
<p>This shows on the left</p>
</div>
<div>
<h3>Right</h3>
<p>This shows on the right</p>
</div>
</div>

또한, `::name::`을 사용하여 슬롯 이름을 축약할 수도 있습니다. 다음 예제는 이전 예제와 정확히 동일하게 작동합니다.

```md
---
layout: two-cols
---

# Left

This shows on the left

::right::

# Right

This shows on the right
```

기본 슬롯을 명시적으로 지정하고 사용자 정의 순서를 제공할 수도 있습니다.

```md
---
layout: two-cols
---

::right::

# Right

This shows on the right

::default::

# Left

This shows on the left
```

## 설정

모든 설정은 마크다운 파일의 frontmatter에 정의할 수 있습니다. 예를 들어:

```md
---
theme: seriph
layout: cover
background: 'https://source.unsplash.com/1600x900/?nature,water'
---

# Slidev

This is the cover page.
```

[frontmatter 설정](/custom/#frontmatter-configures)에 대해 더 자세히 알아보세요.

## LaTeX

Slidev는 [KaTeX](https://katex.org/)를 사용하여 LaTeX를 지원합니다.

<Tweet id="1392246507793915904" />

### 인라인

인라인 렌더링을 위해 LaTeX를 하나의 `$` 문자로 둘러싸십시오.

```md
$\sqrt{3x-1}+(1+x)^2$
```

### 블록

블록 렌더링을 위해 LaTeX를 두 개의 `$` 문자로 둘러싸십시오. 이 모드는 더 큰 기호를 사용하고 결과를 중앙에 배치합니다.

```md
$$
\begin{array}{c}

\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} &
= \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\

\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\

\nabla \cdot \vec{\mathbf{B}} & = 0

\end{array}
$$
```

[Demo](https://ko.sli.dev/demo/starter/8), [KaTeX](https://katex.org/), [`markdown-it-katex`](https://github.com/waylonflinn/markdown-it-katex)에서 다 자세한 내용을 알아보세요.

### LaTex 라인 하이라이팅

> v0.43.1부터 사용 가능

LaTex 블록에 특정 줄을 강조하려면, 중괄호 `{}` 안에 줄 번호를 추가하십시오. 줄 번호는 1부터 시작합니다.

```md
$$ {1|3|all}
\begin{array}{c}
\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} &
= \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\
\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\
\nabla \cdot \vec{\mathbf{B}} & = 0
\end{array}
$$
```

## 다이어그램

[Mermaid](https://mermaid-js.github.io/mermaid) 기반의 다이어그램을 마크다운에서 사용할 수 있습니다.

언어가 `mermaid`로 설정된 코드 블록은 다이어그램으로 변환됩니다. 예를 들어:

~~~md
//```mermaid
sequenceDiagram
  Alice->John: Hello John, how are you?
  Note over Alice,John: A typical interaction
//```
~~~

옵션을 전달함으로써 다이어그램의 스케일링과 테마를 지정할 수도 있습니다. 객체의 구문은 JavaScript 객체 리터럴의 구문입니다. 문자열에는 따옴표 (`'`)를 추가하고 키 사이에 쉼표 (`,`)를 사용해야 합니다.

~~~md
//```mermaid {theme: 'neutral', scale: 0.8}
graph TD
B[Text] --> C{Decision}
C -->|One| D[Result 1]
C -->|Two| E[Result 2]
//```
~~~

[Demo](https://ko.sli.dev/demo/starter/9), [Mermaid](https://mermaid-js.github.io/mermaid)에서 더 자세한 내용을 알아보세요.

## 다중 진입점

> v0.15부터 사용 가능

Slidev는 여러 개의 마크다운 파일을 지원합니다. 또한, 마크다운 파일을 서로 임포트 할 수도 있습니다.

`slides.md` :

```md
# Page 1

This is a normal page

---
src: ./subpage2.md
---

<!-- this page will be loaded from './subpage2.md' -->
Inline content will be ignored
```

`subpage2.md` :

```md
# Page 2

This page is from another file
```

### Frontmatter 병합

메인 진입점과 외부 마크다운 파일에서 모두 frontmatter를 제공할 수 있습니다. 그들 사이에 같은 키가 있다면, **메인 진입점의 것이 우선**합니다. 예를 들어:

`slides.md` :

```md
---
src: ./cover.md
background: https://ko.sli.dev/bar.png
class: text-center
---
```

`cover.md` :

```md
---
layout: cover
background: https://ko.sli.dev/foo.png
---

# Cover

Cover Page
```

이 예제의 결과는 다음 페이지와 동일합니다:

```md
---
layout: cover
background: https://ko.sli.dev/bar.png
class: text-center
---

# Cover

Cover Page
```

### 페이지 재사용

다중 진입점을 사용하면 페이지를 재사용할 수 있습니다. 예를 들어:

```yaml
---
src: ./cover.md
---

---
src: ./intro.md
---

---
src: ./content.md
---

---
# reuse
src: ./content.md
---
```

## MDC 문법

> v0.43.0부터 사용 가능

Slidev에서는 [`markdown-it-mdc`](https://github.com/antfu/markdown-it-mdc)를 사용하여 실험적으로 [MDC (Markdown Components) Syntax](https://content.nuxtjs.org/guide/writing/mdc) 기능을 제공합니다.

`mdc: true`를 마크다운 파일의 frontmatter에 추가하여 활성화할 수 있습니다.

```md
---
mdc: true
---

This is a [red text]{style="color:red"} :inline-component{prop="value"}

![](/image.png){width=500px lazy}

::block-component{prop="value"}
The **default** slot
::
```

[이 문법](https://content.nuxtjs.org/guide/writing/mdc)에 대해 더 자세히 알아보세요.
