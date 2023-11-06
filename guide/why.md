# Slidev를 사용하는 이유

Slidev는 개발자를 위한 프레젠테이션 툴입니다. Markdown을 사용하여 슬라이드를 작성할 수 있습니다. 그리고 슬라이드를 PDF, PNG 또는 SPA로 내보낼 수 있습니다.

이미 [Microsoft PowerPoint](https://www.microsoft.com/en-us/microsoft-365/powerpoint)나 [Apple Keynote](https://www.apple.com/keynote/)와 같은 기능이 많고 다목적 WYSIWYG 슬라이드 제작 도구가 많이 있습니다. 이러한 도구들은 애니메이션, 차트 및 기타 많은 기능을 갖추고 있으면서도 직관적이고 쉽게 배울 수 있도록 잘 만들어져 있습니다. 그렇다면 왜 Slidev를 만들었을까요?

Slidev는 개발자가 이미 익숙한 도구와 기술을 사용하여 프레젠테이션을 더욱 흥미롭고 표현력 있고 매력적으로 만들 수 있도록 유연성과 상호작용성을 제공합니다.

WYSIWYG 편집기를 사용하면 스타일링 옵션에 쉽게 산만해질 수 있습니다. Slidev는 콘텐츠와 시각적 요소를 분리함으로써 이를 해결합니다. 이렇게 하면 한 번에 하나의 작업에만 집중할 수 있으며 동시에 커뮤니티에서 제공하는 테마를 쉽게 재사용할 수 있습니다. Slidev는 다른 슬라이드 덱 빌더를 완전히 대체하려는 것이 아닙니다. 대신 개발자 커뮤니티를 대상으로 합니다.

## Slidev

![](/screenshots/cover.png)

Slidev는 다음과 같은 멋진 기능을 제공합니다.

## Markdown 기반

Slidev는 슬라이드를 하나의 텍스트 파일에 저장하고 구성하기 위해 확장된 Markdown 형식을 사용합니다. 이를 통해 콘텐츠에 집중할 수 있습니다. 콘텐츠와 스타일이 분리되어 있기 때문에 다른 테마로 쉽게 전환할 수 있습니다.

[Slidev의 Markdown 구문](/guide/syntax)에 대해 자세히 알아보세요.

## 테마

Slidev는 테마를 사용하여 슬라이드의 모양을 변경할 수 있습니다. Slidev의 테마는 npm 패키지를 사용하여 공유하고 설치할 수 있습니다. 그런 다음 한 줄의 구성만으로 적용할 수 있습니다.

[테마 갤러리](/themes/gallery)를 확인하거나 [테마 작성 방법](/themes/write-a-theme)을 알아보세요.

## 개발자 친화적

Slidev는 개발자를 위해 설계되었습니다. 개발자를 위한 코드 스니펫을 위한 일급 지원을 제공합니다. [Prism](https://prismjs.com/)과 [Shiki](https://github.com/shikijs/shiki)와 같은 코드 하이라이터를 지원하여 픽셀 완벽한 구문 강조 표시를 제공하면서도 언제든지 코드를 수정할 수 있습니다. [Monaco editor](https://microsoft.github.io/monaco-editor/)를 내장하고 있어 자동 완성, 타입 호버링 및 TypeScript 타입 확인 지원을 통해 프레젠테이션에서 실시간 코딩/데모를 할 수 있습니다.

[하이라이터](/custom/highlighters) 및 [Monaco 구성](/custom/config-monaco)에 대해 자세히 알아보세요.

## 속도

Slidev는 [Vite](https://vitejs.dev/), [Vue 3](https://v3.vuejs.org/) 및 [UnoCSS](https://unocss.dev/)로 구동되며, 이를 통해 가장 멋진 저자 경험을 제공합니다. 변경 사항이 발생할 때마다 슬라이드에 **즉시** 반영됩니다.

[기술 스택](/guide/#tech-stack)에 대해 자세히 알아보세요.

## 상호작용 및 표현력

마크다운 파일 내에서 직접 사용할 수 있는 사용자 정의 Vue 컴포넌트를 작성할 수 있습니다. 또한 프레젠테이션 내에서 이 컴포넌트와 상호작용하여 더 흥미롭고 직관적인 방식으로 아이디어를 표현할 수 있습니다.

## 녹화 지원

Slidev는 내장된 녹화 및 카메라 뷰를 제공합니다. 카메라 뷰를 포함하여 프레젠테이션을 공유하거나 화면과 카메라를 따로 녹화하여 저장할 수 있습니다. 추가 도구가 필요하지 않습니다.

[녹화](/guide/recording)에 대해 자세히 알아보세요.

## 이식성

단 한 줄의 명령어로 슬라이드를 PDF, PNG 또는 호스팅 가능한 SPA(Single-page Application)로 내보낼 수 있습니다. 그리고 어디에서나 공유할 수 있습니다.

[내보내기](/guide/exporting)에 대해 자세히 알아보세요.

## 해커블

Slidev는 웹 기술로 구동되기 때문에 웹 앱에서 할 수 있는 모든 것이 Slidev에서도 가능합니다. 예를 들어 WebGL, API 요청, iframe 또는 실시간 공유 등이 있습니다. 상상력에 맡기세요!

## 한번 해 보기

아무리 말을 해도 직접 해 보는 것보다는 못하죠. 직접 해 볼까요? 단 한 줄의 명령어로 Slidev를 시작할 수 있습니다:

```bash
$ npm init slidev
```

아래 영상에서 Slidev를 사용하는 방법을 확인할 수 있습니다.

<div class="aspect-9/16 relative">
<iframe class="rounded w-full shadow-md border-none" src="https://www.youtube.com/embed/eW7v-2ZKZOU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
