# 코드 하이라이터

Slidev는 두 가지 문법 하이라이터를 제공합니다.

- [Prism](https://prismjs.com/)
- [Shiki](https://github.com/shikijs/shiki)

**prism**은 가장 인기있는 문법 하이라이터 중 하나입니다. 코드에 토큰 클래스를 추가하여 하이라이팅을 수행하고 CSS를 사용하여 색상을 지정합니다. [공식 테마](https://github.com/PrismJS/prism-themes) 를 찾아볼 수 있으며, [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) 를 사용하여 매우 쉽게 직접 만들거나 사용할 수 있습니다.

**Shiki**는 TextMate 문법 기반 문법 하이라이터입니다. 색상 토큰을 생성하므로 추가 CSS가 필요하지 않습니다. Shiki는 훌륭한 문법 지원을 제공하므로 생성된 색상은 VS Code에서 볼 수 있는 것과 정확히 동일합니다. Shiki는 또한 [다양한 내장 테마](https://github.com/shikijs/shiki/blob/master/docs/themes.md) 를 제공합니다. Shiki의 단점은 VS Code 테마와 호환되는 TextMate 테마도 하이라이팅을 수행해야 하므로 사용자 정의가 조금 더 어렵습니다.

Slidev 테마는 일반적으로 Prism과 Shiki 모두를 지원하지만 사용 중인 테마에 따라 하나만 지원할 수도 있습니다.

선택권이 있는 경우 트레이드 오프는 다음과 같습니다.

- **Prism**은 쉬운 사용자 정의를 위해
- **Shiki**는 더 정확한 하이라이팅을 위해

기본적으로 Slidev는 Prism을 사용합니다. 프론트매터를 수정하여 변경할 수 있습니다.

```yaml
---
highlighter: shiki
---
```

## Prism 설정하기

Prism을 설정하려면, 테마 CSS를 가져오거나 [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars)을 사용하여 라이트 모드와 다크 모드 모두에 대한 테마를 구성할 수 있습니다. 자세한 내용은 해당 문서를 참조하십시오.

## Shiki 설정하기

<Environment type="node" />

`./setup.shiki.ts` 파일을 만들고 다음 내용을 추가합니다.

```ts
/* ./setup/shiki.ts */
import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(() => {
  return {
    theme: {
      dark: 'min-dark',
      light: 'min-light',
    },
  }
})
```

[Shiki 공식 문서](https://github.com/shikijs/shiki/blob/master/docs/themes.md#all-themes)를 참조하여 사용 가능한 테마 이름을 확인하십시오.

또는 직접 테마를 사용하려면:

```ts
/* ./setup/shiki.ts */

import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(async({ loadTheme }) => {
  return {
    theme: {
      dark: await loadTheme('path/to/theme.json'),
      light: await loadTheme('path/to/theme.json'),
    },
  }
})
```
