
# 정적 파일 호스팅

## SPA(Single Page Applications) 빌드하기

Slidev는 정적 파일로 빌드할 수 있습니다. 이렇게 하면 빌드된 파일을 웹 서버에 업로드하거나, GitHub Pages, Netlify, Vercel 등의 호스팅 서비스에 업로드할 수 있습니다.

```bash
$ slidev build
```

빌드된 애플리케이션은 `dist/` 아래에서 사용할 수 있습니다.

웹 서버(Apache, NGINX, Caddy 등)에서 빌드된 애플리케이션을 테스트하거나, 프로젝트에서 직접 실행할 수 있습니다: `npx vite preview`.

### 기본 경로

기본적으로, 빌드된 슬라이드는 루트 경로(`/`)에서 호스팅됩니다. 만일 슬라이드를 서브 라우트에서 호스팅하려면, `--base` 옵션을 전달해야 합니다. `--base` 경로는 **반드시** 슬래시(`/`)로 시작하고 끝나야 합니다. 예를 들어:

```bash
$ slidev build --base /talks/my-cool-talk/
```

[Vite의 공식 문서](https://vitejs.dev/guide/build.html#public-base-path)에서 더 자세한 내용을 확인할 수 있습니다.

### 다운로드 가능한 PDF 제공

다음과 같이 설정하면, 슬라이드를 보는 사람들에게 다운로드 가능한 PDF를 제공할 수 있습니다:

```md
---
download: true
---
```

이렇게 하면 빌드 과정에서 PDF 파일이 생성되고, SPA에 다운로드 버튼이 표시됩니다.

또한 PDF를 위한 커스텀 URL을 제공할 수도 있습니다. 이 경우, 렌더링 과정은 생략됩니다.

```md
---
download: 'https://myside.com/my-talk.pdf'
---
```

이 옵션은 CLI 옵션 `--download`(`boolean`만)로도 설정할 수 있습니다.

```bash
$ slidev build --download
```

다운로드 옵션을 사용할 때, 다음과 같이 내보내기 옵션을 제공할 수도 있습니다:

* [CLI 내보내기 옵션](/guide/exporting.html)을 사용하거나
* [프론트매터 내보내기 옵션](/custom/#frontmatter-configures)을 사용

### 저장할 폴더

기본적으로, 빌드된 슬라이드는 `dist/` 아래에 저장됩니다. `--out`을 사용하여 출력 디렉토리를 변경할 수 있습니다.

```bash
$ slidev build --out my-build-folder
```

### 자동 빌드

`--watch` 옵션을 전달하면, 빌드가 자동으로 실행되고 소스가 변경될 때마다 다시 빌드됩니다.

```bash
$ slidev build --watch
```

### 여러 진입점 등록

`--entry` 옵션을 사용하여 여러 진입점을 지정할 수 있습니다. 이 옵션은 여러 슬라이드를 한 번에 빌드할 때 유용합니다.

```bash
$ slidev build slides1.md slides1.md
```

또는

```bash
$ slidev build *.md
```

이 경우, 각 입력 파일은 출력 디렉토리에 빌드된 폴더를 생성합니다.

## 예시

여기 몇 가지 예시가 있습니다:

- [시작 템플릿](https://ko.sli.dev/demo/starter)
- [Composable Vue](https://talks.antfu.me/2021/composable-vue) by [Anthony Fu](https://github.com/antfu)

더 많은 예시는 [Showcases](/showcases)를 확인하십시오.

## 호스팅

`npm init slidev@latest`를 사용하여 프로젝트를 생성하는 것을 권장합니다. 이는 호스팅 서비스를 위한 필요한 구성 파일을 기본적으로 제공합니다.

### Netlify

- [Netlify](https://netlify.com/)

`netlify.toml` 파일을 프로젝트 루트에 생성하고 다음 내용을 추가하십시오.

```ts
[build.environment]
  NODE_VERSION = "14"

[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

그 다음, Netlify에서 새 사이트를 생성하고 레포지토리를 연결하십시오.

### Vercel

- [Vercel](https://vercel.com/)

`vercel.json` 파일을 프로젝트 루트에 생성하고 다음 내용을 추가하십시오.

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

그 다음, Vercel에서 새 사이트를 생성하고 레포지토리를 연결하십시오.

### GitHub Pages

- [GitHub Pages](https://pages.github.com/)

슬라이드를 GitHub Pages에 배포하려면:
- 프로젝트의 모든 파일을 레포지토리에 업로드합니다(예: `name_of_repo`로 이름 지정).
- 다음 내용을 포함하는 `.github/workflows/deploy.yml`를 생성하여 GitHub Actions를 통해 GitHub Pages에 슬라이드를 배포합니다. 이 파일에서 `<name_of_repo>`를 `name_of_repo`로 바꿉니다. 앞뒤 슬래시를 그대로 두도록 주의하십시오.

```yaml
name: Deploy pages

on:
  workflow_dispatch: {}
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    permissions:
      contents: read
      pages: write
      id-token: write

    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    steps:
      - uses: actions/checkout@v3

      - uses: actions/setup-node@v3
        with:
          node-version: 'lts/*'

      - name: Install dependencies
        run: npm install

      - name: Install slidev
        run:  npm i -g @slidev/cli

      - name: Build
        run: slidev build --base /<name_of_repo>/

      - uses: actions/configure-pages@v3

      - uses: actions/upload-pages-artifact@v1
        with:
          path: dist

      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v2
```
- 이제 슬라이드를 배포할 준비가 되었습니다. 레포지토리에서 Settings>Pages로 이동하십시오. "Build and deployment" 아래에서 "Github Actions"을 선택하십시오.
- 마지막으로, 모든 워크플로우가 실행된 후, Settings>Pages 아래에 슬라이드 링크가 표시됩니다.
