# 설치하기

## 시작 템플릿

> Slidev는 [**Node.js >=18.0**](https://nodejs.org/)을 필요로 합니다.

Slidev를 시작하는 가장 좋은 방법은 공식 스타터 템플릿을 사용하는 것입니다.

NPM을 사용하는 경우:

```bash
$ npm init slidev@latest
```

YARN을 사용하는 경우:

```bash
$ yarn create slidev
```

PNPM을 사용하는 경우:

```bash
$ pnpm create slidev
```

위 명령을 입력하고, 나오는 지시사항에 따르세요. 그러고 나면, 자동으로 `http://localhost:3030/`에 슬라이드쇼가 열립니다.

이 템플릿은 Slidev를 시작하는 데 필요한 기본 설정과 Slidev를 시작하는 방법에 대한 간단한 데모를 포함하고 있습니다.

## 수동으로 설치

만일 Slidev를 수동으로 설치하거나 기존 프로젝트에 통합하고 싶다면, 다음과 같이 할 수 있습니다:

```bash
$ npm install @slidev/cli @slidev/theme-default
```
```bash
$ touch slides.md
```
```bash
$ npx slidev
```

> 만일 [pnpm](https://pnpm.io)을 쓰고 있다면, 아래 방법으로 [shamefully-hoist](https://pnpm.io/npmrc#shamefully-hoist) 옵션을 켜야 합니다:
>
> ```bash
> echo 'shamefully-hoist=true' >> .npmrc
> ```

## 전역으로 설치하기

> v0.14부터 사용 가능

다음 명령으로 Slidev를 시스템 전역으로 설치할 수 있습니다:

```bash
$ npm i -g @slidev/cli
```

그리고 나서, `slidev` 명령을 사용하여 프로젝트를 만들지 않고도 어디서든 `slidev`를 사용할 수 있습니다.

```bash
$ slidev
```

이 명령은 `node_modules`에서 `@slidev/cli`를 찾고, 없으면 시스템 전역에서 찾습니다.

## Docker에 설치하기

만일 Docker를 사용하고 있다면, [tangramor](https://github.com/tangramor)에 의해 관리되는 빌드된 도커 이미지를 사용해서 빠르게 시작할 수 있습니다.

작업 폴더에서 다음 명령을 실행하세요:

```bash
docker run --name slidev --rm -it \
    --user node \
    -v ${PWD}:/slidev \
    -p 3030:3030 \
    tangramor/slidev:latest
```

만일 작업 폴더가 비어있다면, 작업 폴더에 템플릿 `slides.md`와 관련 파일들이 생성되고, 서버가 `3030` 포트에서 실행됩니다.

`http://localhost:3030/`에서 슬라이드에 접근할 수 있습니다.

### 배포 가능한 이미지 빌드

또는, 직접 Dockerfile을 사용하여 배포 가능한 이미지를 빌드할 수 있습니다:

```Dockerfile
FROM tangramor/slidev:latest

ADD . /slidev

```

`docker build -t myppt .` 명령으로 도커 이미지를 빌드하고, `docker run --name myslides --rm --user node -p 3030:3030 myppt` 명령으로 컨테이너를 실행합니다.

`http://localhost:3030/`에서 슬라이드에 접근할 수 있습니다.

### 호스팅 가능한 SPA (Single Page Application) 빌드

`slidev` 컨테이너가 실행 중일 때, `slidev` 컨테이너에서 `npx slidev build` 명령을 실행합니다. 그러면 `dist` 폴더에 정적 HTML 파일이 생성됩니다.

#### Github Pages에 호스팅

`dist` 폴더를 [Github Pages](https://tangramor.github.io/slidev_docker/)나 Gitlab Pages와 같은 정적 웹 사이트에 호스팅할 수 있습니다.

Github Pages에서는 URL에 서브폴더가 포함될 수 있기 때문에, 생성된 `index.html`을 수정하여 `href="/assets/xxx`를 `href="./assets/xxx`로 변경해야 합니다. 또는 빌드 과정에서 `--base=/<subfolder>/` 옵션을 사용할 수 있습니다. 예를 들어: `docker exec -i slidev npx slidev build --base=/slidev_docker/`.

그리고 Jekyll 빌드 과정을 피하기 위해, `.nojekyll` 파일을 추가해야 합니다.


#### Docker로 직접 호스팅

Docker을 사용하여 직접 호스팅할 수도 있습니다:

```bash
docker run --name myslides --rm -p 80:80 -v ${PWD}/dist:/usr/share/nginx/html nginx:alpine
```

또는, 다음 Dockerfile을 사용하여 정적 이미지를 생성할 수 있습니다:

```Dockerfile
FROM nginx:alpine

COPY dist /usr/share/nginx/html
```

`docker build -t mystaticppt .` 명령어로 도커 이미지를 빌드하고, `docker run --name myslides --rm -p 80:80 mystaticppt` 명령어로 컨테이너를 실행합니다.

`http://localhost/`에서 슬라이드에 접근할 수 있습니다.

더 자세한 내용은 [tangramor/slidev_docker](https://github.com/tangramor/slidev_docker)을 참고하세요.

## CLI

`@slidev/cli`를 사용하면 몇 가지 명령어를 사용할 수 있습니다. 이를 사용하기 위해 `npx slidev ...` 명령어를 사용하거나, `package.json`에 스크립트를 추가하세요:

```json
{
  "script": {
    "dev": "slidev"
  }
}
```

이 경우, `npm run dev` 명령어를 사용할 수 있습니다.

명령에 여러 옵션을 전달할 수 있습니다:

* boolean 옵션은 존재하면 `true`이고, 그렇지 않으면 `false`입니다 (예: `slidev --open`).
* 일부 옵션은 옵션 뒤에 추가할 수 있습니다. (예: `slidev --port 8080` 또는 `slidev --port=8080`)

만일 npm 스크립트를 사용한다면, npm 명령어 뒤에 `--`를 추가하는 것을 잊지 마세요:
```bash
npm run slidev -- --open
```

### `slidev [entry]`

Slidev 로컬 서버를 시작합니다.

* `[entry]` (`string`, 기본값: `slides.md`): 마크다운 진입점 파일의 경로입니다.

옵션:

* `--port`, `-p` (`number`, 기본값: `3030`): 포트 번호.
* `--open`, `-o` (`boolean`, 기본값: `false`): 브라우저 열기.
* `--remote [password]` (`string`): 원격 접속을 허용합니다. 값이 주어지면, 비밀번호를 URL 쿼리 `password` 매개변수로 전달하여 비공개 프레젠터 모드를 사용할 수 있습니다.
* `--log` (`'error', 'warn', 'info', 'silent'`, 기본값: `'warn'`): 로그 수준.
* `--force`, `-f` (`boolean`, 기본값: `false`): 캐시를 무시하고 다시 번들링하도록 최적화기를 강제합니다.
* `--theme`, `-t` (`string`): 테마 덮어쓰기.

### `slidev build [entry]`

호스팅 가능한 SPA를 빌드합니다.

* `[entry]` (`string`, 기본값: `slides.md`): 마크다운 진입점 파일의 경로입니다.

옵션:

* `--watch`, `-w` (`boolean`, 기본값: `false`): 자동 빌드.
* `--out`, `-o` (`string`, 기본값: `dist`): 출력 경로.
* `--base` (`string`, 기본값: `/`): 베이스 URL (https://cli.vuejs.org/config/#publicpath 참고)
* `--download` (`boolean`, 기본값: `false`): SPA에서 PDF를 다운로드 가능하게 만듭니다.
* `--theme`, `-t` (`string`): 테마 덮어쓰기.

### `slidev export [entry]`

PDF(또는 다른 형식)로 슬라이드를 내보냅니다.

* `[entry]` (`string`, 기본값: `slides.md`): 마크다운 진입점 파일의 경로입니다.

옵션:

* `--output` (`string`, 기본값: use `exportFilename` (https://ko.sli.dev/custom/#frontmatter-configures 참고) 또는 `[entry]-export` 사용): 출력 경로.
* `--format` (`'pdf', 'png', 'md'`, 기본값: `'pdf'`): 출력 형식.
* `--timeout` (`number`, 기본값: `30000`): 렌더링 타임아웃 (https://playwright.dev/docs/api/class-page#page-goto 참고).
* `--range` (`string`): 내보낼 페이지 범위 (예시: `'1,4-5,6'`).
* `--dark` (`boolean`, 기본값: `false`): 다크 테마로 내보내기.
* `--with-clicks`, `-c` (`boolean`, 기본값: `false`): 각 클릭에 대해 슬라이드 생성 (https://ko.sli.dev/guide/animations.html#click-animations 참고).
* `--theme`, `-t` (`string`): 테마 덮어쓰기.

### `slidev format [entry]`

마크다운 파일을 포맷합니다.

* `[entry]` (`string`, 기본값: `slides.md`): 마크다운 진입점 파일의 경로입니다.

### `slidev theme [subcommand]`

테마 관련 작업을 수행합니다.

포함 명령어:

* `eject [entry]`: 현재 테마를 로컬 파일 시스템으로 추출합니다.
  * `[entry]` (`string`, 기본값: `slides.md`): 슬라이드 마크다운 진입점의 경로입니다.
  * 옵션:
    * `--dir` (`string`, 기본값: `theme`): 출력 디렉토리.
    * `--theme`, `-t` (`string`): 테마 덮어쓰기.
