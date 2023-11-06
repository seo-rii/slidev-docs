# 폰트

> v0.20부터 사용 가능

Slidev는 HTML 및 CSS를 사용하여 슬라이드에 사용되는 폰트와 스타일을 사용자 정의할 수 있지만, Slidev는 노력없이 사용할 수 있는 편리한 방법을 제공합니다.

frontmatter에서 다음과 같이 구성하십시오.

```yaml
---
fonts:
  # basically the text
  sans: 'Robot'
  # use with `font-serif` css class from windicss
  serif: 'Robot Slab'
  # for code blocks, inline code, etc.
  mono: 'Fira Code'
---
```

이것이 전부입니다!

폰트는 [Google Fonts](https://fonts.google.com/)에서 **자동으로 가져옵니다**. 즉, Google Fonts에서 사용 가능한 모든 폰트를 직접 사용할 수 있습니다.

## 로컬 폰트

기본적으로 `fonts` 구성을 통해 지정된 모든 폰트는 Google Fonts에서 가져온 것으로 간주됩니다. 로컬 폰트를 사용하려면 `fonts.local`을 지정하여 자동 가져오기를 비활성화하십시오.

```yaml
---
fonts:
  # like font-family in css, you can use `,` to separate multiple fonts for fallback
  sans: 'Helvetica Neue,Robot'
  # mark 'Helvetica Neue' as local font
  local: 'Helvetica Neue'
---
```

## 굵기 & 기울임

기본적으로 Slidev는 각 폰트에 대해 세 가지 굵기 `200`,`400`,`600`을 가져옵니다. 다음과 같이 구성할 수 있습니다.

```yaml
---
fonts:
  sans: 'Robot'
  # default
  weights: '200,400,600'
  # import italic fonts, default `false`
  italic: false
---
```

이 구성은 모든 웹 폰트에 적용됩니다. 각 폰트의 굵기를 더 세밀하게 제어하려면 [HTML](/custom/directory-structure.html#index-html) 및 CSS로 수동으로 가져와야 합니다.

## 폴백 폰트

기본적으로 Slidev는 각 폰트에 대해 다음과 같은 폴백 폰트를 가져옵니다.

```yaml
---
fonts:
  sans: 'Robot'
  serif: 'Robot Slab'
  mono: 'Fira Code'
---
```

이것의 결과는:

```css
.font-sans {
  font-family: "Robot",ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
}
.font-serif {
  font-family: "Robot Slab",ui-serif,Georgia,Cambria,"Times New Roman",Times,serif;
}
.font-mono {
  font-family: "Fira Code",ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
}
```

만일 폴백 폰트를 비활성화하고 싶다면, 다음과 같이 구성하십시오:

```yaml
---
fonts:
  mono: 'Fira Code, monospace'
  fallback: false
---
```

## 제공자

- Options: `google` | `none`
- Default: `google`

폰트 제공자를 지정할 수 있습니다. 현재는 Google Fonts만 지원되며, 앞으로 더 많은 제공자를 추가할 예정입니다. `none`으로 지정하면 자동 가져오기 기능이 완전히 비활성화되고 모든 폰트가 로컬로 처리됩니다.

```yaml
---
fonts:
  provider: 'none'
---
```


