# Monaco 설정하기

<Environment type="client" />

`./setup/monaco.ts` 파일을 만들고 다음 내용을 추가합니다:

```ts
import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(async (monaco) => {
  // use `monaco` to configure
})
```

[Monaco 에디터 설정](https://github.com/Microsoft/monaco-editor)에 대해 더 알아보세요.

## 사용법

Monaco를 사용하려면 코드 블럭에 `{monaco}`를 추가하면 됩니다:

~~~js
//```js
const count = ref(1)
const plusOne = computed(() => count.value + 1)

console.log(plusOne.value) // 2

plusOne.value++ // error
//```
~~~

를 이렇게 바꾸세요:

~~~js
//```js {monaco}
const count = ref(1)
const plusOne = computed(() => count.value + 1)

console.log(plusOne.value) // 2

plusOne.value++ // error
//```
~~~

## 실제로 사용하기

Monaco는 기본적으로 `dev` 모드에서만 작동합니다. 만약 빌드된 SPA에서도 사용하고 싶다면, 다음과 같이 설정하세요:

```yaml
---
monaco: true # default "dev"
---
```

## 자동 타입 설치

Monaco와 함께 TypeScript를 사용할 때, 의존성에 대한 타입은 자동으로 클라이언트 사이드에 설치됩니다.

~~~ts
//```ts {monaco}
import { ref } from 'vue'
import { useMouse } from '@vueuse/core'

const counter = ref(0)
//```
~~~

위의 예제에서, `vue`와 `@vueuse/core`가 로컬 의존성으로 설치되어 있는지 확인하세요. Slidev는 에디터에서 타입이 자동으로 작동하도록 나머지를 처리할 것입니다!

## 테마 설정

테마는 Slidev에 의해 라이트/다크 테마에 따라 제어됩니다. 만약 커스텀하고 싶다면, 테마 ID를 `setup` 함수에 전달하세요:

```ts
// ./setup/monaco.ts
import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(() => {
  return {
    theme: {
      dark: 'vs-dark',
      light: 'vs',
    },
  }
})
```

만약 커스텀 테마를 로드하고 싶다면:

```ts
import { defineMonacoSetup } from '@slidev/types'

// change to your themes
import dark from 'theme-vitesse/themes/vitesse-dark.json'
import light from 'theme-vitesse/themes/vitesse-light.json'

export default defineMonacoSetup((monaco) => {
  monaco.editor.defineTheme('vitesse-light', light as any)
  monaco.editor.defineTheme('vitesse-dark', dark as any)

  return {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
  }
})
```

> 만약 Slidev 테마를 만들고 있다면, `setup` 함수 내부에서 동적 `import()`를 사용하세요. 이렇게 하면 트리 쉐이킹과 코드 스플리팅이 더 잘 작동합니다.

## 에디터 설정

> v0.43.0 이상에서 사용 가능

Monaco 에디터를 커스텀하고 싶다면, `editorOptions` 객체를 전달하세요. 이 객체는 [Monaco IEditorOptions](https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditorOptions.html) 정의와 일치합니다.

~~~ts
//```ts {monaco} { editorOptions: { wordWrap:'on'} }
console.log('HelloWorld')
//```
~~~

만일 이 옵션을 모든 Monaco 인스턴스에 적용하고 싶다면, `defineMonacoSetup` 함수에서 반환하세요:

```ts
// ./setup/monaco.ts
import { defineMonacoSetup } from '@slidev/types'

export default defineMonacoSetup(() => {
  return {
    editorOptions: {
      wordWrap: 'on'
    }
  }
})
```