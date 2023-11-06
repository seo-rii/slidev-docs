# Vue 설정하기

<Environment type="client" />

Slidev는 클라이언트 측에서 애플리케이션을 렌더링하기 위해 [Vue 3](https://v3.vuejs.org/)를 사용합니다. 사용자 정의 플러그인이나 구성을 추가하여 앱을 확장할 수 있습니다.

`./setup/main.ts`에 다음 내용을 추가합니다.

```ts
import { defineAppSetup } from '@slidev/types'

export default defineAppSetup(({ app, router }) => {
  // Vue App
  app.use(YourPlugin)
})
```

이것은 또한 앱이 시작되기 전에 앱의 주 진입점으로 사용될 수 있습니다.

자세한 내용은 [Vue Application API](https://v3.vuejs.org/api/application-api.html#component)를 참조하세요.
