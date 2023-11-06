# 테마 변경하기

Slidev는 테마를 사용하여 슬라이드의 모양을 변경할 수 있습니다. 테마는 슬라이드의 배경, 색상, 글꼴 등을 변경할 수 있습니다. 테마는 npm 패키지로 배포되며, [테마 목록](/themes)에서 확인할 수 있습니다.

테마를 적용하는 것은 매우 쉽습니다. 단지 프론트매터에 `theme:` 필드를 추가하면 됩니다.

```yaml
---
theme: seriph
---
```

> **알림**
> 테마를 스코프 패키지에서 설치하려면 전체 네임스페이스를 지정해야 합니다. 예를 들어 `@organization/slidev-theme-name`과 같이 입력해야 합니다.

서버를 시작하면 자동으로 테마를 설치하라는 메시지가 표시됩니다.

<div class="language-md">
<pre>
<span class="token keyword">?</span> The theme <span class="token string">"@slidev/theme-seriph"</span> was not found in your project, do you want to install it now? › (Y/n)
</pre>
</div>

테마를 수동으로 설치하려면 다음 명령을 실행하세요.

```bash
$ npm install @slidev/theme-seriph
```

이것이 전부입니다. 새로운 테마를 즐기세요! 사용법에 대한 자세한 내용은 테마의 README를 참조하세요.

테마를 공유하고 싶나요? [테마 작성하기](/themes/write-a-theme)를 참조하세요.

## 테마 추출하기

현재 사용 중인 테마를 로컬 파일 시스템으로 **추출**하여 원하는 대로 수정할 수 있습니다. 다음 명령을 실행하세요.

```bash
$ slidev theme eject
```

현재 사용 중인 테마가 `./theme`로 추출되고 프론트매터가 다음과 같이 변경됩니다.

```yaml
---
theme: ./theme
---
```

이것은 기존 테마를 기반으로 테마를 만들고 싶을 때도 유용할 수 있습니다. 이 경우 원래 테마와 저자를 언급하는 것을 잊지 마세요 :)

## 로컬 테마

이전 섹션에서 알아본 것처럼 프로젝트에 로컬 테마를 가질 수 있습니다. 테마 필드에 **상대 경로**를 사용하면 됩니다.

```yaml
---
theme: ./path/to/theme
---
```

[테마 작성하기](/themes/write-a-theme)에서 테마를 작성하는 방법에 대해 자세히 알아볼 수 있습니다.
