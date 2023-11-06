# FAQ

## 그리드

Slidev는 웹 기반으로 작동하기 때문에 원하는 그리드 레이아웃을 적용할 수 있습니다. [CSS Grids](https://css-tricks.com/snippets/css/complete-guide-grid/), [flexboxes](https://css-tricks.com/snippets/css/a-guide-to-flexbox/), 또는 [Masonry](https://css-tricks.com/native-css-masonry-layout-in-css-grid/)와 같은 모든 그리드 레이아웃을 사용할 수 있습니다.

Slidev는 [UnoCSS](https://unocss.dev/)를 내장하고 있으므로 다음과 같이 쉽게 참조할 수 있습니다.

```html
<div class="grid grid-cols-2 gap-4">
<div>

The first column

</div>
<div>

The second column

</div>
</div>
```

더 나아가, 다음과 같이 각 열의 크기를 사용자 정의할 수 있습니다.

```html
<div class="grid grid-cols-[200px_1fr_10%] gap-4">
<div>

The first column (200px)

</div>
<div>

The second column (auto fit)

</div>
<div>

The third column (10% width to parent container)

</div>
</div>
```

[Windi CSS Grids](https://windicss.org/utilities/layout/grid.html)에 대해 더 자세히 알아보세요.

## 크기 지정

슬라이드는 고정 크기(기본값 `980x552px`)로 정의되며 사용자 화면에 맞게 조정됩니다. 절대 위치를 사용해도 화면과 함께 조정되므로 안전하게 사용할 수 있습니다.

예를 들어:

```html
<div class="absolute left-30px bottom-30px">
This is a left-bottom aligned footer
</div>
```

캔버스의 실제 크기를 변경하려면 첫 번째 프론트매터에 `canvasWidth` 옵션을 전달할 수 있습니다.

```yaml
---
canvasWidth: 800
---
```

## 폰트 크기

Slidev는 기본적으로 모든 슬라이드에 `1em` 폰트 크기를 적용합니다. 이는 슬라이드의 크기에 따라 자동으로 조정됩니다. 폰트 크기를 조정하려면 다음과 같이 할 수 있습니다.

### 로컬 스타일 재정의

각 슬라이드에 대해 인라인 `<style>` 태그를 사용하여 스타일을 재정의할 수 있습니다.

```md
# Page 1

<style>
h1 {
  font-size: 10em;
}
</style>

---

# Page 2

This will not be affected.
```

[Embedded Styles](/guide/syntax.html#embedded-styles)에 대해 더 자세히 알아보세요.

### 전역 스타일 재정의

`./style.css`를 만들어 전역 스타일을 제공할 수 있습니다.

```css
/* style.css */ 

h1 {
  font-size: 10em !important;
}
```

[Global Style](/custom/directory-structure.html#style)에 대해서 더 자세히 알아보세요.

### 캔버스 크기 조정

캔버스의 실제 크기를 변경하면 모든 내용(텍스트, 이미지, 컴포넌트 등)과 슬라이드가 모두 크기가 조정됩니다.

```yaml
---
# default: 980
# since the canvas gets smaller, the visual size will become larger
canvasWidth: 800
---
```

### Transform 사용하기

Slidev는 CSS transform 속성의 얇은 래퍼인 `<Transform />` 내장 컴포넌트를 제공합니다.

```md
<Transform :scale="1.4">

- Item 1
- Item 2

</Transform>
```
