# Vite 설정하기

<Environment type="node" />

Slidev는 [Vite](https://vitejs.dev/)를 기반으로 합니다. 이는 Vite의 훌륭한 플러그인 시스템을 활용하여 슬라이드를 더욱 더 커스터마이징할 수 있다는 것을 의미합니다.

`vite.config.ts` 파일을 생성하여 Vite를 설정할 수 있습니다. 이 파일은 [Vite의 설정 파일](https://vitejs.dev/config/)과 동일한 구조를 가집니다.

Slidev는 다음과 같은 Vite 플러그인을 기본적으로 포함하고 있습니다.

- [@vitejs/plugin-vue](https://github.com/vitejs/vite/tree/main/packages/plugin-vue)
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
- [unplugin-icons](https://github.com/antfu/unplugin-icons)
- [vite-plugin-vue-markdown](https://github.com/antfu/vite-plugin-vue-markdown)
- [vite-plugin-remote-assets](https://github.com/antfu/vite-plugin-remote-assets)
- [vite-plugin-windicss](https://github.com/windicss/vite-plugin-windicss)
- [unocss/vite](https://github.com/unocss/unocss/tree/main/packages/vite)

[기본 플러그인 설정](https://github.com/slidevjs/slidev/blob/main/packages/slidev/node/plugins/preset.ts)에 대해 더 자세히 알아보세요.

## 내부 플러그인 설정

> v0.21 이상에서 사용 가능

위의 기본 플러그인 목록을 구성하려면 다음 내용으로 `vite.config.ts`를 생성하세요. Slidev는 일부 플러그인에 대해 미리 구성된 옵션을 가지고 있습니다. 이 사용법은 일부 옵션을 무시하고 덮어쓸 수 있으며, 이는 앱이 깨질 수 있습니다. 이는 **고급 기능**으로 간주되며, 진행하기 전에 무엇을 하고 있는지 확인하세요.

```ts
import { defineConfig } from 'vite'

export default defineConfig({
  slidev: {
    vue: {
      /* vue options */
    },
    markdown: {
      /* markdown-it options */
      markdownItSetup(md) {
        /* custom markdown-it plugins */
        md.use(/* ... */)
      },
    },
    /* options for other plugins */
  },
})
```

[타입 선언](https://github.com/slidevjs/slidev/blob/main/packages/slidev/node/options.ts#L50)에서 더 많은 옵션을 확인하세요.
