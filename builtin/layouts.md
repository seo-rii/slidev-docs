# 레이아웃

## 빌트인 레이아웃

> 테마는 레이아웃 동작을 재정의할 수 있으므로 사용, 매개변수 및 예제를 정확히 알 수 있는 가장 좋은 방법은 해당 문서를 참조하는 것입니다.

### `center`

화면 중앙에 내용을 표시합니다.

### `cover`

프레젠테이션의 커버 페이지를 표시하는 데 사용됩니다. 프레젠테이션 제목, 문맥화 등을 포함할 수 있습니다.

### `default`

어떤 종류의 내용이든 표시할 수 있는 가장 기본적인 레이아웃입니다.

### `end`

프레젠테이션의 마지막 페이지를 표시합니다.

### `fact`

화면에서 많은 중요성을 가진 사실이나 데이터를 표시합니다.

### `full`

화면의 모든 공간을 내용 표시에 사용합니다.

### `image-left`

화면 왼쪽에 이미지를 표시하고 내용을 오른쪽에 배치합니다.

#### 사용법

```yaml
---
layout: image-left

# the image source
image: ./path/to/the/image

# a custom class name to the content
class: my-cool-content-on-the-right
---
```

### `image-right`

화면 오른쪽에 이미지를 표시하고 내용을 왼쪽에 배치합니다.

#### 사용법

```yaml
---
layout: image-right

# the image source
image: ./path/to/the/image

# a custom class name to the content
class: my-cool-content-on-the-left
---
```

### `image`

화면의 주요 내용으로 이미지를 표시합니다.

#### 사용법

```yaml
---
layout: image

# the image source
image: ./path/to/the/image
---
```


### `iframe-left`

화면 왼쪽에 웹 페이지를 표시하고 내용을 오른쪽에 배치합니다.

#### 사용법

```yaml
---
layout: iframe-left

# the web page source
url: https://github.com/slidevjs/slidev

# a custom class name to the content
class: my-cool-content-on-the-right
---
```

### `iframe-right`

화면 오른쪽에 웹 페이지를 표시하고 내용을 왼쪽에 배치합니다.

#### 사용법

```yaml
---
layout: iframe-right

# the web page source
url: https://github.com/slidevjs/slidev

# a custom class name to the content
class: my-cool-content-on-the-left
---
```

### `iframe`

페이지 내용의 주요 내용으로 웹 페이지를 표시합니다.

#### 사용법

```yaml
---
layout: iframe

# the web page source
url: https://github.com/slidevjs/slidev
---
```


### `intro`

프레젠테이션의 시작을 표시합니다. 일반적으로 프레젠테이션 제목, 간단한 설명, 저자 등을 포함합니다.

### `none`

아무 레이아웃도 사용하지 않습니다.

### `quote`

인용문을 눈에 띄게 표시합니다.

### `section`

프레젠테이션 섹션의 시작을 표시합니다.

### `statement`

페이지 내용으로 단언/문장을 만듭니다.

### `two-cols`

페이지 내용을 두 개의 열로 나눕니다.

#### 사용법


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

### `two-cols-header`

페이지 내용을 두 개의 열로 나눕니다. 첫 번째 줄은 페이지 내용의 상단과 하단을 구분하고, 두 번째 줄은 왼쪽과 오른쪽 열을 구분합니다.

#### 사용법


```md
---
layout: two-cols-header
---

This spans both

::left::

# Left

This shows on the left

::right::

# Right

This shows on the right
```

## 커스텀 레이아웃

`layouts/` 디렉토리를 프로젝트 루트에 만들고 사용자 정의 Vue 레이아웃 컴포넌트를 그 안에 넣으면 됩니다.

자세한 내용은 [커스터마이징](/custom/directory-structure#layouts) 섹션을 참조하세요.

## 테마 제공 레이아웃

테마는 새로운 레이아웃을 제공하거나 기존의 것을 재정의할 수 있습니다. 제공된 레이아웃에 대해서는 해당 문서를 읽어보세요.
