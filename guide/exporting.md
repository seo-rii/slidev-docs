# 저장하기

## 슬라이드

### PDF

> PDF 또는 PNG로 내보내기는 렌더링을 위해 [Playwright](https://playwright.dev)를 사용합니다. 따라서 이 기능을 사용하려면 [`playwright-chromium`](https://playwright.dev/docs/installation#download-single-browser-binary)을 설치해야 합니다.
> CI 환경에서 내보내기를 수행하는 경우 [playwright CI 가이드](https://playwright.dev/docs/ci)가 도움이 될 수 있습니다.

`playwright-chromium`를 설치하세요.

```bash
$ npm i -D playwright-chromium
```

그 다음, 다음 명령을 실행하여 슬라이드를 PDF로 내보냅니다.

```bash
$ slidev export
```

몇 초만 기다리면 `./slides-export.pdf`에 슬라이드가 준비됩니다.

### PNG 이미지와 마크다운

`--format png` 옵션을 전달하면 슬라이드마다 PDF 대신 PNG 이미지를 내보냅니다.

```bash
$ slidev export --format png
```

이미지를 마크다운 파일로 내보내려면 `--format md`를 사용하여 컴파일된 png로 구성된 마크다운 파일을 컴파일할 수 있습니다.

```bash
$ slidev export --format md
```

### 다크 모드

만일 다크 모드 테마를 사용하여 슬라이드를 내보내고 싶다면 `--dark` 옵션을 사용하세요.

```bash
$ slidev export --dark
```

### 클릭 단계 내보내기

> v0.21부터 사용 가능

기본적으로 Slidev는 클릭 애니메이션을 비활성화하고 슬라이드 당 하나의 페이지로 내보냅니다. 클릭 단계를 여러 페이지로 내보내려면 `--with-clicks` 옵션을 전달하세요.

```bash
$ slidev export --with-clicks
```

### 슬라이드 범위

`--range` 옵션으로 내보낼 슬라이드의 범위를 지정할 수 있습니다.

```bash
$ slidev export --range 1,4-5,6
```

### PDF 아웃라인

> v0.36.10부터 사용 가능

`--with-toc` 옵션을 전달하여 PDF 아웃라인을 생성할 수 있습니다.

```bash
$ slidev export --with-toc
```

### 파일 이름 지정

`--output` 옵션으로 출력 파일 이름을 지정할 수 있습니다.

```bash
$ slidev export --output my-pdf-export
```

또는, 프론트매터 설정에서:

```yaml
---
exportFilename: my-pdf-export
---
```

### 여러 진입점 등록

`--entry` 옵션을 사용하여 여러 진입점을 지정할 수 있습니다. 이 옵션은 여러 슬라이드를 한 번에 내보낼 때 유용합니다.

```bash
$ slidev export slides1.md slides1.md
```

또는,

```bash
$ slidev export *.md
```

이 경우, 각 입력 파일은 출력 디렉토리에 빌드된 폴더를 생성합니다.

## 발표자 노트

> v0.36.8부터 사용 가능

`--notes` 옵션을 사용하여 발표자 노트만 내보낼 수 있습니다.

```bash
$ slidev export-notes
```

이 명령은 [export command](#multiple-entries)와 같이 여러 진입점 옵션과 함께 사용할 수 있습니다.

## Single-Page Application (SPA)

[Static Hosting](/guide/hosting)을 참고하세요.

## 문제 해결

### 타임아웃

만일 큰 프레젠테이션을 내보내려면 `--timeout`으로 playwrigth 타임아웃을 늘릴 수 있습니다.

```bash
$ slidev export --timeout 60000
```

### 크롬 바이너리 경로

브라우저가 자동으로 검색되지 않았을 경우, `--executable-path`를 사용하여 브라우저 바이너리 경로를 직접 지정할 수 있습니다.

```bash
$ slidev export --executable-path [path_to_chromium]
```
