# 파서 설정 및 확장

Slidev는 프레젠테이션 파일(e.g. `slides.md`)을 세 단계로 파싱합니다.

1. "preparsing" 단계가 수행됩니다. 파일은 `---` 구분자를 사용하여 슬라이드로 분할되며, 가능한 프론트매터 블록을 고려합니다.
2. 각 슬라이드는 외부 라이브러리로 파싱됩니다.
3. Slidev는 특수 프론트매터 속성 `src: ....`를 해결합니다. 이는 다른 md 파일을 포함할 수 있습니다.

## 마크다운 파서

마크다운 파서는 [Vite](https://vitejs.dev)의 내부 플러그인으로 제공됩니다. 따라서 [Vite의 마크다운 파서](/custom/config-vite#configure-internal-plugins)를 구성하는 것으로 Slidev의 마크다운 파서를 구성할 수 있습니다.

## Preparser 확장

> v0.37.0부터 사용 가능

:::중요 경고
Preparser 구성을 수정할 때는 슬라이드를 다시 빌드해야 합니다. (재시작만으로는 충분하지 않을 수 있음)
:::

preparser(위의 단계 1)을 확장할 수 있습니다. preparser는 md 파일의 커스텀 구문을 구현할 수 있도록 매우 확장 가능하며, 이는 **고급 기능**으로 간주되며 암묵적으로 구문에 변경 사항이 발생할 수 있으므로 [편집기 통합](/guide/editors)에 영향을 줄 수 있습니다.

사용자 정의하려면 다음 내용을 포함하는 `./setup/preparser.ts` 파일을 만듭니다.


```ts
import { definePreparserSetup } from '@slidev/types'

export default definePreparserSetup(({filepath, headmatter}) => {
  return [
    {
      transformRawLines(lines) {
        for (const i in lines) {
          if (lines[i] === '@@@')
            lines[i] = 'HELLO'
        }
      },
    }
  ]
})
```

이 예시는 `@@@` 줄을 `hello` 줄로 교체합니다. preparser 구성 파일의 구조와 preparser가 관련된 주요 개념을 보여줍니다.
- `definePreparserSetup`은 함수를 매개변수로 사용하여 호출해야 합니다.
- 함수는 파일 경로(루트 프레젠테이션 파일)와 headmatter(md 파일에서 가져옴)를 받습니다. 이 정보를 사용할 수 있습니다(e.g. 프레젠테이션 파일에 기반한 확장을 활성화).
- 함수는 preparser 확장의 목록을 반환해야 합니다.
- 확장은 다음을 포함할 수 있습니다:
  - `transformRawLines(lines)` 함수는 md 파일의 headmatter를 파싱한 후에 실행되며, 모든 줄의 목록을 받습니다. 함수는 목록을 임의로 변경할 수 있습니다.
  - `transformSlide(content, frontmatter)` 함수는 각 슬라이드에 대해 호출되며, 파일을 분할한 후에 실행되며, 슬라이드 내용을 문자열로, 슬라이드의 frontmatter를 객체로 받습니다. 함수는 frontmatter를 변경할 수 있으며, content 문자열을 반환해야 합니다(수정된 경우, 수정되지 않은 경우 `undefined`일 수 있음).
  - `name`

## Preparser 확장 예시

### 예제 1: 컴팩트 구문 최상위 프레젠테이션

프레젠테이션이 주로 커버 이미지를 보여주고 다른 md 파일을 포함하는 경우를 상상해 보십시오. 컴팩트한 표기법을 원할 수 있습니다. 예를 들어, `slides.md`의 일부가 다음과 같을 수 있습니다.

```md

@cover: /nice.jpg
# Welcome
@src: page1.md
@src: page2.md
@cover: /break.jpg
@src: pages3-4.md
@cover: https://source.unsplash.com/collection/94734566/1920x1080
# Questions?
see you next time

```

이 경우, `@src:` 및 `@cover:` 구문을 허용하려면 다음 내용을 포함하는 `./setup/preparser.ts` 파일을 만듭니다.


```ts
import { definePreparserSetup } from '@slidev/types'

export default definePreparserSetup(() => {
  return [
    {
      transformRawLines(lines) {
        let i = 0
        while (i < lines.length) {
          const l = lines[i]
          if (l.match(/^@cover:/i)) {
            lines.splice(i, 1,
              '---',
              'layout: cover',
              `background: ${l.replace(/^@cover: */i, '')}`,
              '---',
              '')
            continue
          }
          if (l.match(/^@src:/i)) {
            lines.splice(i, 1,
              '---',
              `src: ${l.replace(/^@src: */i, '')}`,
              '---',
              '')
            continue
          }
          i++
        }
      }
    },
  ]
})
```

이것이 전부입니다!


### 예제 2: 사용자 정의 프론트매터를 사용하여 슬라이드를 래핑

몇 개의 슬라이드를 래핑하려는 경우가 있습니다. 예를 들어, 슬라이드를 확대하거나 축소하려는 경우가 있습니다. 그러나 여전히 다양한 기존 레이아웃을 사용하려는 경우가 있습니다. 따라서 새 레이아웃을 만드는 것이 적합하지 않습니다.
이 경우, `slides.md`를 다음과 같이 작성할 수 있습니다.

```md



---
layout: quote
_scale: 0.75
---

# Welcome

> great!

---
_scale: 4
---
# Break

---

# Ok

---
layout: center
_scale: 2.5
---
# Questions?
see you next time

```

여기서 `_scale` 프론트매터 속성을 사용하여 슬라이드를 래핑합니다.

이 `_scale` 속성을 프론트매터에서 처리하려면, 다음 내용을 포함하는 `./setup/preparser.ts` 파일을 만듭니다.

```ts
import { definePreparserSetup } from '@slidev/types'

export default definePreparserSetup(() => {
  return [
    {
      transformSlide(content, frontmatter) {
        if ('_scale' in frontmatter) {
          return [
            `<Transform :scale=${frontmatter['_scale']}>`,
            '',
            content,
            '',
            '</Transform>'
          ].join('\n')
        }
      },
    },
  ]
})
```

이것이 전부입니다!
