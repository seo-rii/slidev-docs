# 애드온 사용하기

애드온은 프레젠테이션에서 사용할 수 있는 추가 컴포넌트, 레이아웃, 스타일, 설정 등의 세트입니다.

[테마](/themes/use)와 매우 유사하지만, 일반적으로:

* 슬라이드의 전역 스타일에 영향을 주지 않습니다.
* 하나의 프레젠테이션에서 여러 애드온을 사용할 수 있습니다.

애드온을 사용하려면, 다음과 같이 수동으로 설치해야 합니다:

```bash
$ npm install [slidev-addon-package1] [slidev-addon-package2]
```

그 다음, 프론트매터에서 애드온을 선언합니다:

```yaml
---
addons:
  - slidev-addon-package1
  - slidev-addon-package2
---
```

또는 `package.json` 파일에서:

```json
// package.json
{
  "slidev": {
    "addons": [
      "slidev-addon-package1",
      "slidev-addon-package2",
    ]
  }
}
```
