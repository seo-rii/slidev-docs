# KaTeX 설정하기

<Environment type="node" />

`./setup/katex.ts` 파일을 만들고 다음 내용을 추가합니다.

```ts
import { defineKatexSetup } from '@slidev/types'

export default defineKatexSetup(() => {
  return {
    /* ... */
  }
})
```

이 설정을 통해, [KaTex 옵션](https://katex.org/docs/options.html)에 대한 사용자 정의 설정을 제공할 수 있습니다. 자세한 내용은 타입 정의와 KaTeX 문서를 참조하세요.
