# Mermaid 설정하기

<Environment type="client" />

`./setup/mermaid.ts` 파일을 만들고 다음 내용을 추가합니다:

```ts
import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    theme: 'forest',
  }
})
```

이렇게 하면 [Mermaid](https://mermaid-js.github.io/)에 대한 기본 설정을 제공할 수 있습니다. 자세한 내용은 타입 정의와 해당 문서를 참조하세요.

## 사용자 정의 테마/스타일

사용자 정의 Mermaid 테마나 스타일을 만들고 싶다면, 다음 예제처럼 `themeVariables`를 정의하면 됩니다:

```ts
import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    theme: 'base',
    themeVariables: {
      // General theme variables
      noteBkgColor: "#181d29",
      noteTextColor: "#F3EFF5cc",
      noteBorderColor: "#404551",

      // Sequence diagram variables
      actorBkg: "#0E131F",
      actorBorder: "#44FFD2",
      actorTextColor: "#F3EFF5",
      actorLineColor: "#F3EFF5",
      signalColor: "#F3EFF5",
      signalTextColor: "#F3EFF5",
    }
  }
})
```

모든 테마 변수는 [Mermaid Theme Configuration](https://mermaid.js.org/config/theming.html) 페이지에서 찾을 수 있습니다.
