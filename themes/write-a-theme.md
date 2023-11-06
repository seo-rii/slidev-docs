# 테마 만들기

시작하기 전에, 테마를 만들기 위한 스캐폴딩을 위해 다음의 제너레이터를 사용하는 것을 추천합니다.

```bash
$ npm init slidev-theme
```

그러면, 테마를 만들기 위한 기본적인 구조가 생성됩니다. 그리고 나서, `example.md` 파일을 열어서 테마를 수정하고 테스트할 수 있습니다. 또한, [공식 테마](/themes/gallery)를 참고할 수도 있습니다.

## 기능

테마는 다음의 기능을 제공할 수 있습니다:

- 전역 스타일
- 기본 설정 제공 (폰트, 색상 스키마, 하이라이터 등)
- 기본 레이아웃 제공 또는 기존 레이아웃 오버라이드
- 기본 컴포넌트 제공 또는 기존 컴포넌트 오버라이드
- UnoCSS/Windi CSS 설정 확장
- Monaco와 Prism 같은 도구 설정

## 배포 규칙

테마는 npm 레지스트리에 배포되며, 다음의 규칙을 따라야 합니다:

- 패키지 이름은 `slidev-theme-`로 시작해야 합니다. 예를 들어, `slidev-theme-awesome`
- `package.json`의 `keywords` 필드에 `slidev-theme`와 `slidev`를 추가해야 합니다.

## 시작하기

테마를 만들기 위해, 환경을 먼저 설정합시다. `example.md` 파일을 만들고, 아래와 같이 프론트매터를 추가합니다. 이렇게 하면, 현재 디렉토리를 테마로 사용한다는 것을 Slidev에게 알릴 수 있습니다.

```md
---
theme: ./
---
```

원한다면 `package.json`에 스크립트를 추가할 수도 있습니다.

```json
// package.json
{
  "scripts": {
    "dev": "slidev example.md",
    "build": "slidev build example.md",
    "export": "slidev export example.md",
    "screenshot": "slidev export example.md --format png"
  }
}
```

테마를 배포하기 위해 `npm publish`를 실행하면 됩니다. 빌드 과정이 필요하지 않습니다. (즉, `.vue`와 `.ts` 파일을 직접 배포할 수 있습니다. Slidev는 이들을 이해할 수 있습니다.)

테마 기여는 로컬 커스터마이징과 동일한 규칙을 따릅니다. 자세한 내용은 [커스터마이징 문서](/custom/)를 참고하세요.

## 기본 설정

> v0.19부터 사용 가능

테마는 `package.json`을 통해 기본 설정을 제공할 수 있습니다.

```json
// package.json
{
  "slidev": {
    "defaults": {
      "aspectRatio": "16/9",
      "canvasWidth": 980,
      "fonts": {
        "sans": "Robot",
        "mono": "Fira Code"
      }
    }
  }
}
```

위의 예시는 기본적인 설정을 보여줍니다. `aspectRatio`와 `canvasWidth`는 [프론트매터 설정](/guide/syntax.html#frontmatter)과 동일합니다. `fonts`는 [Google Fonts](https://fonts.google.com/)에서 자동으로 가져옵니다.

[폰트](/custom/fonts)와 [프론트매터 설정](/custom/#프론트매터-설정)에 대해 더 알아보세요.

## 테마 메타데이터

### 색상 스키마

기본적으로, Slidev는 테마가 라이트 모드와 다크 모드를 모두 지원한다고 가정합니다. 만약 테마가 특정 색상 스키마만 지원한다면, `package.json`에서 명시적으로 지정해야 합니다.

```json
// package.json
{
  "name": "slidev-theme-my-cool-theme",
  "keywords": [
    "slidev-theme",
    "slidev"
  ],
  "slidev": {
    "colorSchema": "light" // or "dark" or "both"
  }
}
```

테마를 만들때 다크 모드의 판별을 위해 `html.dark` 선택자를 사용할 수 있습니다.

```css
/* general css here */

html:not(.dark) {
  /* light mode css here */
}

html.dark {
  /* dark mode css here */
}
```

Slidev는 색상 스키마를 전환하기 위해 페이지의 `html` 요소에 `dark` 클래스를 토글합니다.

### 코드 하이라이팅

신택스 하이라이터 색상도 테마에서 제공할 수 있습니다. [Prism](https://prismjs.com/)과 [Shiki](https://github.com/shikijs/shiki) 모두 지원합니다. 자세한 내용은 [하이라이터 문서](/custom/highlighters)를 참고하세요.

둘 중 하나 또는 둘 다 지원할 수 있습니다. 기본 테마의 설정 예시를 참고하세요. [`./styles/code.css`](https://github.com/slidevjs/slidev/blob/main/packages/create-theme/template/styles/code.css) / [`./setup/shiki.ts`](https://github.com/slidevjs/slidev/blob/main/packages/create-theme/template/setup/shiki.ts).

`package.json`에서 지원하는 하이라이터를 명시하는 것을 잊지 마세요.

```json
// package.json
{
  "slidev": {
    "highlighter": "shiki" // or "prism" or "both"
  }
}
```

### Slidev 버전

만일 테마에서 slidev 최신 버전의 기능을 사용한다면, 테마가 제대로 작동하기 위해 필요한 최소한의 Slidev 버전을 설정할 수 있습니다.

```json
// package.json
{
  "engines": {
    "slidev": ">=0.19.3"
  }
}
```

만약 사용자가 Slidev의 오래된 버전을 사용하고 있다면, 에러가 발생합니다.
