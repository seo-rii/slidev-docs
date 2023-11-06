# 시작하기

## 개요

Slidev <sup>(slide + dev, **/slaɪdɪv/**)</sup>는 웹 기반 슬라이드 제작 및 발표 도구입니다. 개발자가 마크다운으로 내용을 작성하면서 HTML과 Vue 컴포넌트의 기능을 사용하여
픽셀 완벽한 레이아웃과 디자인을 제공하고 내장된 대화형 데모를 슬라이드에 포함시킬 수 있습니다.

즉시 다시로드되는 경험과 함께 기능이 풍부한 마크다운 파일을 사용하여 아름다운 슬라이드를 생성하고 많은 내장형 통합(라이브 코딩, PDF 내보내기, 프레젠테이션 녹화 등)을 사용할 수 있습니다. 웹으로 구동되기
때문에 Slidev로 할 수 있는 것은 무엇이든 할 수 있습니다. 가능성은 무한합니다.

Slidev를 사용해야 하는 이유에 대해서는 [Why Slidev](/guide/why) 섹션을 참조하십시오.

### 기능

- 📝 [**마크다운 기반**](/guide/syntax.html) - 좋아하는 편집기와 워크플로를 사용하세요.
- 🧑‍💻 [**개발자 친화적**](/guide/syntax.html#code-blocks) - 내장된 구문 강조 표시, 라이브 코딩 등
- 🎨 [**테마**](/themes/gallery.html) - 테마는 npm 패키지로 공유하고 사용할 수 있습니다.
- 🌈 [**스타일**](/guide/syntax.html#embedded-styles) - [UnoCSS](https://github.com/unocss/unocss)
  또는 [Windi CSS](https://windicss.org/)를 사용하여 슬라이드를 스타일링합니다.
- 🤹 [**대화형**](/custom/directory-structure.html#components) - Vue 컴포넌트를 매끄럽게 통합합니다.
- 🎙 [**발표자 모드**](/guide/presenter-mode.html) - 다른 창 또는 휴대폰을 사용하여 슬라이드를 제어합니다.
- 🎨 [**그리기**](/guide/drawing.html) - 슬라이드에 그리고 주석을 달 수 있습니다.
- 🧮 [**LaTeX**](/guide/syntax.html#latex) - 내장된 LaTeX 수학 방정식 지원
- 📰 [**다이어그램**](/guide/syntax.html#diagrams) - 텍스트 설명으로 다이어그램을 만듭니다.
- 🌟 [**아이콘**](/guide/syntax.html#icons) - 아이콘셋에서 아이콘에 직접 액세스할 수 있습니다.
- 💻 [**편집기**](/guide/editors.html) - 통합 편집기 또는 [VS Code 확장](https://github.com/slidevjs/slidev-vscode)
- 🎥 [**녹화**](/guide/recording.html) - 내장된 녹화 및 카메라 보기
- 📤 [**휴대용**](/guide/exporting.html) - PDF, PNG 또는 호스팅 가능한 SPA로 내보내기
- ⚡️ [**빠름**](https://vitejs.dev) - [Vite](https://vitejs.dev)에 의해 지원되는 즉시 다시로드
- 🛠 [**Hackable**](/custom/config-vite.html) - Vite 플러그인, Vue 컴포넌트 또는 npm 패키지 사용

### 기술 스택

Slidev는 다음 도구와 기술을 결합하여 가능합니다.

- [Vite](https://vitejs.dev) - 극도로 빠른 프론트엔드 도구
- [Vue 3](https://v3.vuejs.org/) 기반 [Markdown](https://daringfireball.net/projects/markdown/syntax) - HTML 및 Vue 컴포넌트의
  기능을 활용하면서 내용에 집중할 수 있습니다.
- [Windi CSS](https://github.com/windicss/windicss) 및 [UnoCSS](https://github.com/unocss/unocss) - 필요할 때 스타일을 쉽게 지정할 수
  있는 온디맨드 유틸리티 기반 CSS 프레임워크
- [Prism](https://github.com/PrismJS/prism), [Shiki](https://github.com/shikijs/shiki), [Monaco Editor](https://github.com/Microsoft/monaco-editor) -
  코드 하이라이팅 및 편집기
- [RecordRTC](https://recordrtc.org) - 내장된 녹화 및 카메라 보기
- [VueUse](https://vueuse.org)
  패밀리 - [`@vueuse/core`](https://github.com/vueuse/vueuse), [`@vueuse/head`](https://github.com/vueuse/head), [`@vueuse/motion`](https://github.com/vueuse/motion),
  및 기타 등등...
- [Iconify](https://iconify.design/) - 아이콘셋 컬렉션.
- [Drauu](https://github.com/antfu/drauu) - 그리기 및 주석 지원
- [KaTeX](https://katex.org/) - LaTeX 수학 렌더링.
- [Mermaid](https://mermaid-js.github.io/mermaid) - 텍스트 다이어그램.

### 첫 번째 프레젠테이션 만들기

<br>

#### 온라인에서 시작하기

[sli.dev/new](https://ko.sli.dev/new)

[![](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://ko.sli.dev/new)

#### 로컬에서 시작하기

NPM:

```bash
$ npm init slidev
```

Yarn:

```bash
$ yarn create slidev
```

pnpm:

```bash
$ pnpm create slidev
```

를 실행하고 프롬프트를 따르세요. 슬라이드를 만들기 시작하세요! 마크다운 구문에 대한 자세한 내용은 [구문 가이드](/guide/syntax)를 읽어보세요.

### CLI

Slidev가 설치된 프로젝트에서는 npm 스크립트에서 `slidev` 바이너리를 사용할 수 있습니다.

```json
{
  "scripts": {
    "dev": "slidev",
    // start dev server
    "build": "slidev build",
    // build for production SPA
    "export": "slidev export"
    // export slides to pdf
  }
}
```

또는, [`npx`](https://www.npmjs.com/package/npx)를 사용할 수 있습니다.

```bash
$ npx slidev
```

`slidev` 명령어에 대한 자세한 옵션은 `slidev --help`를 실행하세요.

### 마크다운 문법

Slidev는 프로젝트 루트의 `slides.md` 파일을 읽어 슬라이드로 변환합니다. `slides.md` 파일을 수정하면 슬라이드의 내용이 즉시 업데이트됩니다. 예를 들어:

~~~md
# Slidev

Hello World

---

# Page 2

Directly use code blocks for highlighting

//```ts
console.log('Hello, World!')
//```

---

# Page 3
~~~

[문법 가이드](/guide/syntax)를 읽어보세요.
