# Windi CSS 설정하기

<Environment type="node" />

> 경고
> 
> Slidev v0.42.0 이후로, [UnoCSS](/custom/config-unocss)가 Slidev의 기본 CSS 프레임워크가 되었습니다.
> 
> `css: windicss`를 프론트매터에 설정하여 Windi CSS를 계속 사용할 수 있습니다.
> ```md
> ---
> css: windicss
> ---
> ```

HTML 마크업은 마크다운에 내장되어 있습니다. 따라서 원하는대로 내용을 스타일링할 수 있습니다.

예를 들어:

```html
<div class="grid pt-4 gap-4 grid-cols-[100px,1fr]">

### Name

- Item 1
- Item 2

</div>
```

[Windi CSS v3.0](https://windicss.org/posts/v30.html)의 [Attributify Mode](https://windicss.org/posts/v30.html#attributify-mode)는 기본적으로 활성화되어 있습니다.

## 설정

Windi CSS를 구성하려면 다음 내용과 같이 `setup/windicss.ts`를 만들어 내장된 구성을 확장합니다.

```ts
// setup/windicss.ts

import { defineWindiSetup } from '@slidev/types'

// extending the builtin windicss configurations
export default defineWindiSetup(() => ({
  shortcuts: {
    // custom the default background
    'bg-main': 'bg-white text-[#181818] dark:(bg-[#121212] text-[#ddd])',
  },
  theme: {
    extend: {
      // fonts can be replaced here, remember to update the web font links in `index.html`
      fontFamily: {
        sans: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
        mono: '"Fira Code", monospace',
      },
    },
  },
}))
```

[더 많은 Windi CSS 구성](https://windicss.org/guide/configuration.html)에 대해서는 Windi CSS 문서를 참조하세요.
