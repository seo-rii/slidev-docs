# Vue 전역 컨텍스트

Slidev는 고급 조건 또는 탐색 컨트롤을 위해 [전역 Vue 컨텍스트](https://v3.vuejs.org/api/application-config.html#globalproperties) `$slidev`를 주입합니다.

## 사용법

`$slidev`는 마크다운 및 Vue 템플릿에서 ["Mustache" 구문](https://v3.vuejs.org/guide/template-syntax.html#interpolations)으로 어디서든지 액세스할 수 있습니다.

```md
<!-- slides.md -->

# Page 1

Current page is: {{ $slidev.nav.currentPage }}
```

```html
<!-- Foo.vue -->

<template>
  <div>Title: {{ $slidev.configs.title }}</div>
  <button @click="$slidev.nav.next">Next Page</button>
</template>
```

## 속성

### `$clicks`

`$clicks`는 현재 슬라이드에서 클릭 수를 보유합니다. 클릭 수에 따라 조건부로 다른 콘텐츠를 표시할 수 있습니다.

```html
<div v-if="$clicks > 3">Content</div>
```

### `$page`

`$page`은 현재 페이지 번호를 보유합니다. 1부터 시작합니다.

```md
Page: {{ $page }}

Is current page active: {{ $page === $slidev.nav.currentPage }}
```

### `$renderContext`

`$renderContext`는 현재 렌더링 컨텍스트를 보유합니다. `slide`, `overview`, `presenter` 또는 `previewNext`일 수 있습니다.

```md
<div v-if="$renderContext === 'slide'">
  This content will only be rendered in slides view
</div>
```

### `$slidev.nav`

`$slidev.nav`는 슬라이드 탐색의 속성 및 컨트롤을 보유하는 반응형 객체입니다. 예를 들면:

```js
$slidev.nav.next() // 다음 스텝

$slidev.nav.nextSlide() // 다음 슬라이드(클릭 횟수 무시)

$slidev.nav.go(10) // #10 페이지로 이동
```

```js
$slidev.nav.currentPage // 현재 슬라이드 번호

$slidev.nav.currentLayout // 현재 레이아웃 id
```

더 많은 속성들을 사용할 수 있습니다. 자세한 내용은 [nav.ts](https://github.com/slidevjs/slidev/blob/main/packages/client/logic/nav.ts)의 내보내기를 참조하십시오.

> 참고: `$slidev.nav.clicks`는 전역 상태이고 `$clicks`는 각 슬라이드에 대해 로컬입니다. 페이지 전환 시 클릭 변경이 트리거되는 것을 방지하기 위해 **`$clicks`를 사용하여 `$slidev.nav.clicks`를 피하는 것이 좋습니다.**.

### `$slidev.configs`

`slides.md`의 [첫 번째 프론트매터에 있는 구성](/custom/#frontmatter-configures)을 보유하는 반응형 객체입니다. 예를 들면:

```yaml
---
title: My First Slidev!
---
```

```
{{ $slidev.configs.title }} // 'My First Slidev!'
```

### `$slidev.themeConfigs`

`$slidev.themeConfigs`는 파싱된 테마 구성을 보유하는 반응형 객체입니다.

```yaml
---
title: My First Slidev!
themeConfig:
  primary: #213435
---
```

```
{{ $slidev.themeConfigs.primary }} // '#213435'
```

### `$nav`

> v0.43.0 이상에서 사용 가능

`$slidev.nav`의 약어입니다.
