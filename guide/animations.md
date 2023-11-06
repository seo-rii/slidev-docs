# 애니메이션

## 클릭 애니메이션

### `v-click`

Slidev는 클릭 애니메이션을 위한 `v-click` 디렉티브를 제공합니다. 이 디렉티브는 클릭할 때마다 요소를 보이게 만듭니다.

```md
# Hello

<!-- Component usage: this will be invisible until you press "next" -->
<v-click>

Hello World

</v-click>

<!-- Directive usage: this will be invisible until you press "next" the second time -->
<div v-click class="text-xl p-2">

Hey!

</div>
```

### `v-after`

`v-after`의 사용법은 `v-click`과 유사하지만, 이전 `v-click`이 트리거되면 요소를 보이게 만듭니다.

```md
<div v-click>Hello</div>
<div v-after>World</div>
```

`next` 버튼을 클릭하면 `Hello`가 나타나고, `World`가 같이 나타납니다.

### `v-click-hide`

`v-click`과 동일하지만, 요소를 나타내는 대신 클릭 후 요소를 숨깁니다.

```md
<div v-click-hide>Hello</div>
```

### `v-clicks`

`v-clicks`는 컴포넌트로 제공됩니다. 이는 모든 자식 요소에 `v-click` 디렉티브를 적용하는 단축키입니다. 특히 목록과 함께 작업할 때 유용합니다.

```md
<v-clicks>

- Item 1
- Item 2
- Item 3
- Item 4

</v-clicks>
```

`next` 버튼을 클릭할 때마다 항목이 하나씩 나타납니다.

중첩된 목록에 대해 `depth` props를 사용할 수 있습니다.

```md
<v-clicks depth="2">

- Item 1
  - Item 1.1
  - Item 1.2
- Item 2
  - Item 2.1
  - Item 2.2

</v-clicks>
```

### 커스텀 클릭 카운트

기본적으로 Slidev는 다음 슬라이드로 이동하기 전에 몇 번의 클릭이 필요한지 계산합니다. 이 설정을 `clicks` 프론트매터 옵션으로 재정의할 수 있습니다.

```yaml
---
# 10 clicks in this slide, before going to the next
clicks: 10
---
```

### 정렬

`v-clicks` 컴포넌트는 기본적으로 자식 요소를 순서대로 표시합니다. `v-click` 디렉티브에 클릭 인덱스를 전달하여 표시 순서를 사용자 정의할 수 있습니다.

```md
<div v-click>1</div>
<div v-click>2</div>
<div v-click>3</div>
```

```md
<!-- the order is reversed -->
<div v-click="3">1</div>
<div v-click="2">2</div>
<div v-click="1">3</div>
```

```md
---
clicks: 3
---

<!-- visible after 3 clicks -->
<v-clicks at="3">
  <div>Hi</div>
</v-clicks>
```

### 진입 & 이탈

> v0.43.0부터 사용 가능

`v-click` 디렉티브에 배열을 전달하여 진입 및 이탈 인덱스를 지정할 수 있습니다. 끝 인덱스는 배제됩니다.

```md
<div v-click="[2, 4]">This will be shown on the 2nd and 3rd clicks, and hide again after the 4th.</div>
```

### 요소 전환

`v-click` 디렉티브를 요소에 적용하면 `slidev-vclick-target` 클래스 이름이 부여됩니다. 요소가 숨겨진 경우 `slidev-vclick-hidden` 클래스 이름도 부여됩니다. 예를 들어:

```html
<div class="slidev-vclick-target slidev-vclick-hidden">Text</div>
```

클릭 후 다음과 같이 변경됩니다.

```html
<div class="slidev-vclick-target">Text</div>
```

기본적으로, 이러한 클래스에는 페이드 효과가 적용됩니다.

```css
// the default

.slidev-vclick-target {
  transition: opacity 100ms ease;
}

.slidev-vclick-hidden {
  opacity: 0;
  pointer-events: none;
}
```

이러한 효과를 사용자 정의할 수 있습니다. 예를 들어, 다음과 같이 스케일링 효과를 적용할 수 있습니다.

```css
// styles.css

.slidev-vclick-target {
  transition: all 500ms ease;
}

.slidev-vclick-hidden {
  transform: scale(0);
}
```

특정 슬라이드 또는 레이아웃에 대한 애니메이션을 지정하려면

```scss
.slidev-page-7,
.slidev-layout.my-custom-layout {
  .slidev-vclick-target {
    transition: all 500ms ease;
  }

  .slidev-vclick-hidden {
    transform: scale(0);
  }
}
```

[스타일 설정](/custom/directory-structure#style)에 대해 더 자세히 알아보세요.

## 모션

Slidev는 [@vueuse/motion](https://motion.vueuse.org/)을 내장하고 있습니다. `v-motion` 디렉티브를 사용하여 요소에 모션을 적용할 수 있습니다. 예를 들어:

```html
<div
  v-motion
  :initial="{ x: -80 }"
  :enter="{ x: 0 }">
  Slidev
</div>
```

`Slidev` 텍스트는 초기화될 때 `-80px`에서 원래 위치로 이동합니다.

> 참고: Slidev는 성능을 위해 다음 슬라이드를 미리 로드합니다. 이는 애니메이션이 페이지로 이동하기 전에 시작될 수 있음을 의미합니다. 이를 제대로 작동하려면 특정 슬라이드에 대한 미리 로드를 비활성화할 수 있습니다.
>
> ```md
> ---
> preload: false
> ---
> ```
>
> 또는, `v-if`를 사용하여 요소 수명 주기를 제어하여 세밀한 제어를 할 수 있습니다.
>
> ```html
> <div
>   v-if="$slidev.nav.currentPage === 7"
>   v-motion
>   :initial="{ x: -80 }"
>   :enter="{ x: 0 }">
>   Slidev
> </div>
> ```

[Demo](https://ko.sli.dev/demo/starter/7), [@vueuse/motion](https://motion.vueuse.org/), [v-motion](https://motion.vueuse.org/features/directive-usage), [Presets](https://motion.vueuse.org/features/presets)를 참고하세요.

## 전환 효과

<div id="pages-transitions" />

> v0.39.0부터 사용 가능

Slidev는 슬라이드 전환 효과를 기본적으로 지원합니다. `transition` 프론트매터 옵션을 설정하여 사용할 수 있습니다.

```md
---
transition: slide-left
---
```

이렇게 한다면 슬라이드 전환 시 멋진 슬라이딩 효과를 얻을 수 있습니다. 프론트매터에 설정하면 모든 슬라이드에 적용됩니다. 슬라이드마다 다른 전환을 적용할 수도 있습니다.

### 기본 전환효과

- `fade` - 교차 페이드 인/아웃
- `fade-out` - 페이드 아웃 후 페이드 인
- `slide-left` - 왼쪽으로 슬라이드 (뒤로 가면 오른쪽으로 슬라이드)
- `slide-right` - 오른쪽으로 슬라이드 (뒤로 가면 왼쪽으로 슬라이드)
- `slide-up` - 위로 슬라이드 (뒤로 가면 아래로 슬라이드)
- `slide-down` - 아래로 슬라이드 (뒤로 가면 위로 슬라이드)
- `view-transition` - 뷰 전환 API와 함께 슬라이드

### 뷰 전환

> v0.43.0부터 사용 가능

**뷰 전환 API**는 다른 DOM 상태 간에 쉽게 애니메이션 전환을 만들 수 있는 메커니즘을 제공합니다. [View Transitions API - MDN Web Docs - Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API)에서 자세히 알아보세요.

:::경고 - 실험적
이 기능은 모든 브라우저에서 지원되지 않습니다. 사용하기 전에 [Browser compatibility table](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API#browser_compatibility)을 주의 깊게 확인하세요.
:::

Slidev는 뷰 전환을 사용하여 슬라이드 전환을 만들 수 있습니다. `view-transition` 전환을 사용하면 슬라이드 전환 시 뷰 전환을 사용할 수 있습니다.

또한, [MDC (Markdown Component) Syntax](https://content.nuxtjs.org/guide/writing/mdc)를 사용하여 편리하게 뷰 전환을 사용할 수 있습니다.

```md
---
transition: view-transition
mdc: true
---
# View Transition {.inline-block.view-transition-title}
---
# View Transition {.inline-block.view-transition-title}
```

### 커스텀 전환

Slidev의 슬라이드 전환은 [Vue Transition](https://vuejs.org/guide/built-ins/transition.html)으로 구동됩니다. 커스텀 전환을 제공하려면:

```md
---
transition: my-transition
---
```

그 다음, 커스텀 전환을 정의합니다.

```css
.my-transition-enter-active,
.my-transition-leave-active {
  transition: opacity 0.5s ease;
}

.my-transition-enter-from,
.my-transition-leave-to {
  opacity: 0;
}
```

[Vue Transition](https://vuejs.org/guide/built-ins/transition.html)에서 자세히 알아보세요.

### 이전/이후 전환

슬라이드를 이전/이후로 이동할 때 다른 전환을 사용할 수 있습니다. 이를 위해 `transition` 프론트매터 옵션을 `|`로 구분하여 두 개의 전환을 지정합니다.

```md
---
transition: go-forward | go-backward
---
```

이렇게 한다면, 슬라이드 전환 시 `go-forward` 전환을 사용합니다. 그러나 슬라이드를 뒤로 이동할 때는 `go-backward` 전환을 사용합니다.

### 고급 사용법

`transition` 프론트매터 옵션에는 전환 이름 외에도 전환에 대한 추가 옵션을 지정할 수 있습니다. 이를 위해 `transition` 프론트매터 옵션을 객체로 지정합니다.

```md
---
transition:
  name: my-transition
  enterFromClass: custom-enter-from
  enterActiveClass: custom-enter-active
---
```
