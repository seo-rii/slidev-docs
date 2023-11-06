# 애드온 작성하기

> v0.32.1 버전부터 사용 가능

## 기능

애드온은 다음과 같은 기능을 제공할 수 있습니다:

- 글로벌 스타일 (주의해서 사용하세요. [테마](/themes/use)의 역할입니다.)
- 커스텀 레이아웃 또는 기존 레이아웃 재정의
- 커스텀 컴포넌트 또는 기존 컴포넌트 재정의
- UnoCSS/Windi CSS 구성 확장
- Monaco 및 Prism과 같은 도구 구성

## 규칙

애드온은 npm 레지스트리에 게시되어야 하며, 다음 규칙을 따라야 합니다:

- `slidev-addon-`로 시작하는 패키지 이름을 사용하세요. 예를 들어 `slidev-addon-awesome`
- `package.json`의 `keywords` 필드에 `slidev-addon`과 `slidev`를 추가하세요.

## 설정

### 초기화

애드온을 만들려면 `package.json` 파일을 만들고 `npm init`을 사용하여 디렉토리를 만드세요.

그런 다음, slidev 종속성을 설치하세요:

```bash
$ npm install -D @slidev/cli
```

### 테스트

애드온을 테스트하기 위해, `example.md` 파일을 만들고 내용을 추가하세요.

원한다면 `packages.json`에 몇 가지 스크립트를 추가할 수 있습니다.

```json
// package.json
{
  "scripts": {
    "dev": "slidev example.md",
    "build": "slidev build example.md",
    "export": "slidev export example.md",
    "screenshot": "slidev export example.md --format png"
  }
}
```

애드온들 게시하려면, `npm publish`를 실행하세요. 빌드 과정이 필요하지 않습니다. (즉, `.vue` 및 `.ts` 파일을 직접 게시할 수 있습니다. Slidev는 이들을 이해할 수 있습니다.)

애드온 기여 지점은 로컬 커스터마이징과 동일한 규칙을 따릅니다. [문서에서 네이밍 규칙](/custom/)을 참조하세요.

## 애드온 메타데이터

### Slidev 버전

애드온이 Slidev의 특정 기능에 의존하는 경우, 애드온이 제대로 작동하려면 필요한 최소 Slidev 버전을 설정할 수 있습니다:

```json
// package.json
{
  "engines": {
    "slidev": ">=0.32.1"
  }
}
```

만일 사용자가 Slidev의 오래된 버전을 사용하고 있다면, 오류가 발생할 것입니다.
