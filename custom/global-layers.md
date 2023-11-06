# 전역 레이어

> v0.17부터 사용 가능

전역 레이어는 슬라이드 간에 **지속적인** 사용자 정의 컴포넌트를 가질 수 있습니다. 이는 푸터, 슬라이드 간 애니메이션, 전역 효과 등을 위해 유용할 수 있습니다.

Slidev는 이러한 용도로 `global-top.vue`, `global-bottom.vue` 또는 `custom-nav-controls.vue`를 프로젝트 루트 아래에 만들면 자동으로 선택합니다.

레이어 관계:

- Global Top (`global-top.vue`)
- Slides
- Global Bottom (`global-bottom.vue`)
- NavControls
  - Customized Navigation Controls (`custom-nav-controls.vue`)

## 예시

```html
<!-- global-bottom.vue -->
<template>
  <footer class="absolute bottom-0 left-0 right-0 p-2">Your Name</footer>
</template>
```

'Your Name' 텍스트가 모든 슬라이드에 나타납니다.

```html
<!-- custom-nav-controls -->
<template>
  <button class="icon-btn" title="Next" @click="$slidev.nav.next">
    <carbon:arrow-right />
  </button>
</template>
```

'Next' 버튼이 모든 슬라이드에 나타납니다.

이것을 조건부로 사용하려면 [Vue Global Context](/custom/vue-context)를 적용할 수 있습니다.

```html
<!-- hide the footer from Page 4 -->
<template>
  <footer
    v-if="$slidev.nav.currentPage !== 4"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    Your Name
  </footer>
</template>
```

```html
<!-- hide the footer from "cover" layout -->
<template>
  <footer
    v-if="$slidev.nav.currentLayout !== 'cover'"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    Your Name
  </footer>
</template>
```

```html
<!-- an example footer for pages -->
<template>
  <footer
    v-if="$slidev.nav.currentLayout !== 'cover'"
    class="absolute bottom-0 left-0 right-0 p-2"
  >
    {{ $slidev.nav.currentPage }} / {{ $slidev.nav.total }}
  </footer>
</template>
```

```html
<!-- custom-nav-controls -->
<!-- hide the button in Presenter model -->
<template>
  <button v-if="!$slidev.nav.isPresenter" class="icon-btn" title="Next" @click="$slidev.nav.next">
    <carbon:arrow-right />
  </button>
</template>
```
