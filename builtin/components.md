# 컴포넌트

## 빌트인 컴포넌트

### `Arrow`

화살표를 그립니다.

#### 사용법

~~~md
<Arrow x1="10" y1="20" x2="100" y2="200" />
~~~

또는:

~~~md
<Arrow v-bind="{ x1:10, y1:10, x2:200, y2:200 }" />
~~~

파라미터:

* `x1` (`string | number`, 필수): 시작 x좌표
* `y1` (`string | number`, 필수): 시작 y좌표
* `x2` (`string | number`, 필수): 종료 x좌표
* `y2` (`string | number`, 필수): 종료 y좌표
* `width` (`string | number`, 기본값: `2`): 선 넓이
* `color` (`string`, 기본값: `'currentColor'`): 선 색상

### `AutoFitText`

> 실험적인 컴포넌트입니다.

박스 안의 폰트 크기가 자동으로 콘텐츠에 맞게 조정되는 텍스트를 그립니다. PowerPoint 또는 Keynote의 텍스트 상자와 유사합니다.

#### 사용법

~~~md
<AutoFitText :max="200" :min="100" modelValue="Some text"/>
~~~

파라미터:

* `max` (`string | number`, 기본값 `100`): 최대 폰트 크기
* `min` (`string | number`, 기본값 `30`): 최소 폰트 크기
* `modelValue` (`string`, 기본값 `''`): 텍스트 내용

### `LightOrDark`

현재 활성화된 라이트 또는 다크 테마에 따라 다른 내용을 표시합니다.

#### 사용법

`LightOrDark` 컴포넌트를 사용하면 두 개의 이름이 지정된 슬롯 `#dark`와 `#light`를 사용할 수 있습니다:
~~~md
<LightOrDark>
  <template #dark>Dark mode is on</template>
  <template #light>Light mode is on</template>
</LightOrDark>
~~~

`LightOrDark` 컴포넌트에 제공된 props는 스코프가 지정된 슬롯 props를 사용하여 사용할 수 있습니다:
~~~md
<LightOrDark width="100" alt="some image">
  <template #dark="props">
    <img src="/dark.png" v-bind="props"/>
  </template>
  <template #light="props">
    <img src="/light.png" v-bind="props"/>
  </template>
</LightOrDark>
~~~

슬롯에 마크다운을 제공할 수 있지만 내용을 빈 줄로 둘러싸야 합니다:
~~~md
<LightOrDark>
  <template #dark>
  
![dark](/dark.png)

  </template>
  <template #light>
  
![light](/light.png)

  </template>
</LightOrDark>
~~~

### `Link`

주어진 슬라이드로 이동할 수 있는 링크를 삽입합니다.

#### 사용법

~~~md
<Link to="42">Go to slide 42</Link>
<Link to="42" title="Go to slide 42"/>
<Link to="solutions" title="Go to solutions"/>
~~~

파라미터:

* `to` (`string | number`): 이동할 슬라이드 번호 또는 별칭(1부터 시작)
* `title` (`string`): 링크에 표시할 툴팁

대응하는 경로가 존재한다면 문자열을 `to`로 사용할 수 있습니다. 예를 들어:
~~~md
---
routeAlias: solutions
---
# Now some solutions!
~~~


### `RenderWhen`

특정한 컨텍스트에서만 렌더링합니다. (예를 들어, 프리젠터 뷰에서만 렌더링)

#### 기본값

~~~md
<RenderWhen context="presenter">This will only be rendered in presenter view.</RenderWhen>
~~~

컨텍스트 종류: `'main' | 'slide' | 'overview' | 'presenter' | 'previewNext'`

파라미터:

* `context` (`Context | Context[]`): 렌더링할 컨텍스트

### `SlideCurrentNo`

현재 슬라이드 번호를 표시합니다.

#### 기본값

~~~md
<SlideCurrentNo />
~~~

### `SlidesTotal`

슬라이드의 총 개수를 표시합니다.

#### 기본값

~~~md
<SlidesTotal />
~~~

### `Titles`

HTML로 구문 분석된 슬라이드의 메인 제목을 삽입합니다.

제목 및 제목 수준은 각 슬라이드의 첫 번째 제목 요소에서 자동으로 검색됩니다.

front matter 구문을 사용하여 슬라이드에 대한 이 자동 동작을 재정의할 수 있습니다:
```yml
---
title: Amazing slide title
level: 2
---
```

#### 기본값

`<Titles>` 컴포넌트는 다음과 같이 불러올 수 있는 가상 컴포넌트입니다:
```js
import Titles from '/@slidev/titles.md'
```

그런 다음 다음과 같이 사용할 수 있습니다:
~~~md
<Titles no="42" />
~~~

파라미터:

* `no` (`string | number`): 제목을 표시할 슬라이드 번호 (슬라이드는 `1`부터 시작)

### `Toc`

목차를 삽입합니다.

만일 제목을 목차에 표시하고 싶지 않다면, 슬라이드의 front matter 블록에 다음을 사용하세요:
```yml
---
hideInToc: true
---
```

[`<Titles>` component](#titles) 컴포넌트를 사용하여 만들어진 제목을 표시합니다.

#### 사용법

~~~md
<Toc />
~~~

파라미터:

* `columns` (`string | number`, 기본값: `1`): 표시할 열의 수
* `listClass` (`string | string[]`, 기본값: `''`): 표시할 목록에 적용할 클래스
* `maxDepth` (`string | number`, 기본값: `Infinity`): 표시할 제목의 최대 깊이
* `minDepth` (`string | number`, 기본값: `1`): 표시할 제목의 최소 깊이
* `mode` (`'all' | 'onlyCurrentTree'| 'onlySiblings'`, 기본값: `'all'`):
  * `'all'`: 모든 항목을 표시합니다.
  * `'onlyCurrentTree'`: 현재 트리에 있는 항목과 해당 항목의 직계 자식만 표시합니다.
  * `'onlySiblings'`: 현재 트리에 있는 항목과 해당 항목의 형제만 표시합니다.

### `Transform`

특정 요소에 스케일링 또는 변환을 적용합니다.

#### 사용법

~~~md
<Transform :scale="0.5">
  <YourElements />
</Transform>
~~~

파라미터:

* `scale` (`number | string`, 기본값 `1`): 크기 비율
* `origin` (`string`, 기본값 `'top left'`): 변환 기준점

### `Tweet`

트위터 트윗을 삽입합니다.

#### 사용법

~~~md
<Tweet id="20" />
~~~

파라미터:

* `id` (`number | string`, 필수): 트윗의 ID
* `scale` (`number | string`, 기본값 `1`): 트윗의 크기수
* `conversation` (`string`, 기본값 `'none'`): [tweet embed parameter](https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference)

### `VAfter`, `VClick` and `VClicks`

https://ko.sli.dev/guide/animations.html 을 참고하세요.
### `Youtube`

유튜브 영상을 삽입합니다.

#### 기본값

~~~md
<Youtube id="luoMHjh-XcQ" />
~~~

파라미터:

* `id` (`string`, 필수): 유튜브 영상 ID
* `width` (`number`): 영상 넓이
* `height` (`number`): 영상 높이

## 커스텀 컴포넌트

`components/` 디렉토리를 프로젝트 루트에 생성하고, 그 안에 커스텀 Vue 컴포넌트를 만들어 사용할 수 있습니다. 마크다운 파일에서는 동일한 이름으로 사용할 수 있습니다!

[디렉토리 구조](/custom/directory-structure#components) 섹션을 읽어보세요.

## 테마 제공 컴포넌트

테마는 컴포넌트를 제공할 수 있습니다. 제공된 컴포넌트에 대해서는 문서를 읽어보세요.

또는 [디렉토리 구조](/custom/directory-structure) 섹션을 확인하세요.
