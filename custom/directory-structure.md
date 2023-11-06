# 폴더 구조

Slidev는 구성을 최소화하고 기능 확장을 유연하고 직관적으로 만들기 위해 일부 디렉토리 구조 규칙을 사용합니다.

기본 구조는 다음과 같습니다.

```bash
your-slidev/
  ├── components/       # 커스텀 컴포넌트
  ├── layouts/          # 커스텀 레이아웃
  ├── public/           # 정적 파일
  ├── setup/            # 커스텀 후크
  ├── styles/           # 커스텀 스타일
  ├── index.html        # index.html 인젝션
  ├── slides.md         # 메인 슬라이드
  └── vite.config.ts    # vite 설정파일 확장
```

모든 항목은 선택 사항입니다.

## 컴포넌트

경로: `./components/*.{vue,js,ts,jsx,tsx,md}`

이 디렉토리의 컴포넌트는 슬라이드 Markdown에서 파일 이름과 동일한 컴포넌트 이름으로 직접 사용할 수 있습니다.

예를 들어:

```bash
your-slidev/
  ├── ...
  └── components/
      ├── MyComponent.vue
      └── HelloWorld.ts
```

```md
<!-- slides.md -->

# My Slide

<MyComponent :count="4"/>

<!-- both namings work -->

<hello-world foo="bar">
  Slot
</hello-world>
```

이 기능은 [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components)에 의해 제공됩니다. 자세한 내용은 해당 문서를 참조하십시오.

Slidev는 사용할 수 있는 [내장 컴포넌트](/builtin/components)도 제공합니다.

## 레이아웃

경로: `./layouts/*.{vue,js,ts,jsx,tsx}`

```
your-slidev/
  ├── ...
  └── layouts/
      ├── cover.vue
      └── my-cool-theme.vue
```

레이아웃을 위해 원하는 파일 이름을 사용할 수 있습니다. 그런 다음 YAML 헤더에서 파일 이름을 사용하여 레이아웃을 참조합니다.

```yaml
---
layout: my-cool-theme
---
```

만일 제공한 레이아웃이 내장 레이아웃 또는 테마 레이아웃과 같은 이름을 가지고 있다면, 커스텀 레이아웃이 내장/테마 레이아웃보다 우선합니다. 우선순위는 `local > theme > built-in`입니다.

레이아웃 컴포넌트에서 슬라이드 내용에 `<slot/>`을 사용하십시오. 예를 들어:

```html
<!-- default.vue -->
<template>
  <div class="slidev-layout default">
    <slot />
  </div>
</template>
```

## 퍼블릭

경로: `./public/*`

이 디렉토리의 파일은 개발 중에 루트 경로 `/`에서 제공되며 dist 디렉토리의 루트에 그대로 복사됩니다. [Vite의 `public` 디렉토리](https://vitejs.dev/guide/assets.html#the-public-directory)에 대해 자세히 읽어보십시오.

## 스타일

경로: `./style.css` | `./styles/index.{css,js,ts}`

이 디렉토리의 스타일은 슬라이드에 적용됩니다. 만일 여러개의 css 파일을 import하고 싶다면, 다음과 같은 구조를 만들고 import 순서를 직접 관리하십시오.

```bash
your-slidev/
  ├── ...
  └── styles/
      ├── index.ts
      ├── base.css
      ├── code.css
      └── layouts.css
```

```ts
// styles/index.ts

import './base.css'
import './code.css'
import './layouts.css'
```

스타일은 [Unocss](https://unocss.dev/)와 [PostCSS](https://postcss.org/)를 통해 처리됩니다. 따라서 css 중첩과 [at-directives](https://windicss.org/features/directives.html)를 기본으로 사용할 수 있습니다. 예를 들어:

```less
.slidev-layout {
  @apply px-14 py-10 text-[1.1rem];

  h1, h2, h3, h4, p, div {
    @apply select-none;
  }

  pre, code {
    @apply select-text;
  }

  a {
    color: theme('colors.primary');
  }
}
```

[문법에 대해 더 자세히 알아보세요](https://windicss.org/features/directives.html).

## `index.html`

경로: `index.html`

`index.html`은 메인 `index.html`에 메타 태그와/또는 스크립트를 인젝션할 수 있는 기능을 제공합니다.

예를 들어, 다음과 같은 커스텀 `index.html`을 사용하면:

```html
<!-- ./index.html -->
<head>
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Nunito+Sans:wght@200;400;600&display=swap" rel="stylesheet">
</head>

<body>
  <script src="./your-scripts"></script>
</body>
```

최종적으로 생성되는 `index.html`은 다음과 같습니다:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" type="image/png" href="https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png">
  <!-- injected head -->
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Nunito+Sans:wght@200;400;600&display=swap" rel="stylesheet">
</head>
<body>
  <div id="app"></div>
  <script type="module" src="__ENTRY__"></script>
  <!-- injected body -->
  <script src="./your-scripts"></script>
</body>
</html>
```

## 글로벌 레이어

경로: `global-top.vue` | `global-bottom.vue`

[Global Layers](/custom/global-layers)에서 더 자세히 알아보세요.

