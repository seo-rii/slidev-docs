# 커스터마이징

Slidev는 스타일링에서 툴링 구성까지 완벽하게 커스터마이징할 수 있습니다. ([Vite](/custom/config-vite), [UnoCSS](/custom/config-unocss), [Monaco](/custom/config-monaco) 등)을 구성할 수 있습니다.

## Frontmatter 설정

Slidev는 첫 번째 슬라이드의 frontmatter에서 구성할 수 있습니다. 다음은 각 옵션의 기본값을 보여줍니다.

```yaml
---
# 테마 ID 또는 패키지 이름
# 자세한 내용은 https://ko.sli.dev/themes/use.html을 참조하세요.
theme: 'default'
# 슬라이드의 제목, 지정되지 않은 경우 첫 번째 헤더에서 자동으로 추론됩니다.
title: 'Slidev'
# 웹 페이지를 위한 제목 템플릿, `%s`는 페이지의 제목으로 대체됩니다.
titleTemplate: '%s - Slidev'
# 슬라이드에 대한 정보, 마크다운 문자열이 될 수 있습니다.
info: false
# PDF를 내보낼 때 사용할 작성자 정보
author: Your Name Here
# PDF를 내보낼 때 사용할 키워드 정보, 쉼표로 구분됩니다.
keywords: keyword1,keyword2

# 발표자 모드를 활성화합니다. boolean, 'dev', 'build'가 될 수 있습니다.
presenter: true
# SPA 빌드에서 PDF 다운로드를 활성화합니다. 사용자 정의 URL이 될 수도 있습니다.
download: false
# 내보낸 파일의 파일 이름
exportFilename: 'slidev-exported'
# 내보내기 옵션
# 캐멀 케이스 형식의 내보내기 CLI 옵션을 사용합니다.
# 자세한 내용은 https://ko.sli.dev/guide/exporting.html을 참조하세요.
export:
  format: pdf
  timeout: 30000
  dark: false
  withClicks: false
  withToc: false
# 구문 강조 표시기, 'prism' 또는 'shiki'가 될 수 있습니다.
highlighter: 'prism'
# 코드 블록에 줄 번호를 표시합니다.
lineNumbers: false
# monaco 에디터를 활성화합니다. boolean, 'dev', 'build'가 될 수 있습니다.
monaco: 'dev'
# vite-plugin-remote-assets를 사용하여 로컬에서 원격 에셋을 다운로드합니다. boolean, 'dev', 'build'가 될 수 있습니다.
remoteAssets: false
# 슬라이드의 텍스트를 선택할 수 있는지 여부를 제어합니다.
selectable: true
# 슬라이드 녹화를 활성화합니다. boolean, 'dev', 'build'가 될 수 있습니다.
record: 'dev'

# 슬라이드에 대한 색상 스키마를 강제로 지정합니다. 'auto', 'light', 'dark'가 될 수 있습니다.
colorSchema: 'auto'
# vue-router의 라우터 모드, "history" 또는 "hash"가 될 수 있습니다.
routerMode: 'history'
# 슬라이드의 종횡비
aspectRatio: '16/9'
# 캔버스의 실제 너비, px 단위
canvasWidth: 980
# 테마 커스터마이징에 사용되며, 속성 `x`에 대해 `--slidev-theme-x`로 루트 스타일을 삽입합니다.
themeConfig:
  primary: '#5d8392'

# 파비콘, 로컬 파일 경로 또는 URL이 될 수 있습니다.
favicon: 'https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png'
# 다이어그램을 렌더링하는 데 사용되는 PlantUML 서버의 URL
plantUmlServer: 'https://www.plantuml.com/plantuml'
# 구글 폰트에서 자동으로 가져올 폰트
# 자세한 내용은 https://ko.sli.dev/custom/fonts을 참조하세요.
fonts:
  sans: 'Roboto'
  serif: 'Roboto Slab'
  mono: 'Fira Code'

# 모든 슬라이드에 적용되는 기본 프론트매터
defaults:
  layout: 'default'
  # ...

# 그리기 옵션
# 자세한 내용은 https://ko.sli.dev/guide/drawing.html을 참조하세요.
drawings:
  enabled: true
  persist: false
  presenterOnly: false
  syncAll: true

# HTML 태그 속성
htmlAttrs:
  dir: 'ltr'
  lang: 'en'
---
```

[타입 정의](https://github.com/slidevjs/slidev/blob/main/packages/types/src/config.ts)에서 더 자세한 정보를 알아보세요.

## 슬라이드 단위 설정

각 슬라이드는 다음과 같은 설정을 받을 수 있습니다.

* `clicks` (`number`): 커스텀 클릭 수 (자세한 내용은 [여기](/guide/animations.html#custom-clicks-count)를 참조하세요).
* `disabled` (`boolean`): 슬라이드를 완전히 비활성화합니다.
* `hide` (`boolean`): `src`를 사용할 때 하위 슬라이드를 숨깁니다. (자세한 내용은 [여기](/guide/syntax.html#multiple-entries)를 참조하세요).
* `hideInToc` (`boolean`): `<Toc>` 컴포넌트에 슬라이드를 숨깁니다. (자세한 내용은 [여기](/builtin/components.html#toc)를 참조하세요).
* `layout` (`string`): 슬라이드에 적용할 레이아웃 컴포넌트를 정의합니다. (자세한 내용은 [여기](/guide/syntax.html#front-matter-layouts)와 [여기](/builtin/layouts.html)를 참조하세요).
* `level` (`number`): `<Title>` 및 `<Toc>` 컴포넌트에 대한 제목 레벨을 재정의합니다. (제목이 선언된 경우에만 해당됩니다. 자세한 내용은 [여기](/builtin/components.html#titles)를 참조하세요).
* `preload` (`boolean`, 기본값 `true`): 다음 슬라이드를 미리 로드합니다. (자세한 내용은 [여기](/guide/animations.html#motion)를 참조하세요).
* `routeAlias` (`string`): URL 또는 `<Link>` 컴포넌트에서 사용할 수 있는 라우트 별칭을 만듭니다. (자세한 내용은 [여기](/builtin/components.html#link)를 참조하세요).
* `src` (`string`): 마크다운 파일을 포함합니다. (자세한 내용은 [여기](/guide/syntax.html#multiple-entries)를 참조하세요).
* `title` (`string`): `<Title>` 및 `<Toc>` 컴포넌트에 대한 제목을 재정의합니다. (자세한 내용은 [여기](/builtin/components.html#titles)를 참조하세요).
* `transition` (`string | TransitionProps`): 슬라이드와 다음 슬라이드 사이의 전환을 정의합니다. (자세한 내용은 [여기](/guide/animations.html#slide-transitions)를 참조하세요).

## 폴더 구조

Slidev는 디렉토리 구조 규칙을 사용하여 구성 표면을 최소화하고 기능 확장을 유연하고 직관적으로 만듭니다.

[디렉토리 구조](/custom/directory-structure) 섹션을 참조하세요.

## Config Tools

- [Highlighters](/custom/highlighters)
- [Configure Vue](/custom/config-vue)
- [Configure Vite](/custom/config-vite)
- [Configure UnoCSS](/custom/config-unocss)
- [Configure Windi CSS](/custom/config-windicss)
- [Configure Monaco](/custom/config-monaco)
- [Configure KaTeX](/custom/config-katex)
- [Configure Mermaid](/custom/config-mermaid)
