# 단축키 설정하기

> v0.20부터 사용 가능

> v0.35.6 (제외)부터는 어떤 기본 단축키를 유지할지 결정할 수 있습니다 (아래의 `...base,` 참조).

<Environment type="client" />

## 시작하기

`./setup/shortcuts.ts`를 만들고 다음 내용을 추가합니다.

```ts
import type { NavOperations, ShortcutOptions } from '@slidev/types'
import { defineShortcutsSetup } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations, base: ShortcutOptions[]) => {
  return [
    ...base, // keep the existing shortcuts
    {
      key: 'enter',
      fn: () => nav.next(),
      autoRepeat: true,
    },
    {
      key: 'backspace',
      fn: () => nav.prev(),
      autoRepeat: true,
    },
  ]
})
```

위 설정으로 [Navigation](/guide/navigation#navigation-bar)에 언급된 단축키에 대한 사용자 정의 설정을 제공할 수 있습니다. 위 설정은 <kbd>enter</kbd>를 다음 애니메이션 또는 슬라이드로, <kbd>backspace</kbd>를 이전 애니메이션 또는 슬라이드로 바인딩합니다.

설정 함수는 일부 네비게이션 메서드를 포함하는 객체를 받고, 일부 단축키 설정을 포함하는 배열을 반환합니다. 자세한 내용은 타입 정의를 참조하세요.

## 고급 키 바인딩

`key` 타입은 문자열만 허용하지만 다음 규칙을 사용하여 여러 키를 바인딩할 수 있습니다.

```ts
import type { NavOperations, ShortcutOptions } from '@slidev/types'
import { defineShortcutsSetup } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations, base: ShortcutOptions[]) => {
  return [
    ...base,
    {
      key: 'ShiftLeft+ArrowRight',
      fn: () => nav.next(),
      autoRepeat: true,
    }
  ]
})
```

## 고급 네비게이션 기능

`nav` 네비게이션 작업을 사용하면 기본 _다음 슬라이드_ 또는 _이전 슬라이드_보다 더 많은 기능에 액세스할 수 있습니다. 다음을 참조하세요.

```ts
import { defineShortcutsSetup, NavOperations } from '@slidev/types'

export default defineShortcutsSetup((nav: NavOperations) => {
  return [
    {
      key: 'e',
      
      // Set the `e` keyboard shortcut to be used as a bookmark
      // or quick-access of sorts, to navigate specifically to
      // slide number 42
      fn: () => nav.go(42),
      autoRepeat: true,
    }
  ]
})
```

[useMagicKeys | VueUse](https://vueuse.org/core/useMagicKeys/)에서 키 누름 이벤트에 대한 자세한 내용을 참조하세요.
