// @ts-check

const Guide = [
  {
    text: 'Slidev를 사용하는 이유',
    link: '/guide/why',
  },
  {
    text: '시작하기',
    link: '/guide/',
  },
  {
    text: '설치',
    link: '/guide/install',
  },
  {
    text: '마크다운 문법',
    link: '/guide/syntax',
  },
  {
    text: '네비게이션',
    link: '/guide/navigation',
  },
  {
    text: '애니메이션',
    link: '/guide/animations',
  },
  {
    text: '저장하기',
    link: '/guide/exporting',
  },
  {
    text: '파일 호스팅',
    link: '/guide/hosting',
  },
  {
    text: '녹화하기',
    link: '/guide/recording',
  },
  {
    text: '발표자 모드',
    link: '/guide/presenter-mode',
  },
  {
    text: '주석',
    link: '/guide/drawing',
  },
  {
    text: '에디터 통합',
    link: '/guide/editors',
  },
  {
    text: 'FAQ',
    link: '/guide/faq',
  },
]

const Theme = [
  {
    text: '테마 변경하기',
    link: '/themes/use',
  },
  {
    text: '테마 갤러리',
    link: '/themes/gallery',
  },
  {
    text: '테마 만들기',
    link: '/themes/write-a-theme',
  },
]

const Addon = [
  {
    text: '애드온 사용하기',
    link: '/addons/use',
  },
  {
    text: '애드온 만들기',
    link: '/addons/write-an-addon',
  },
]

const Translations = [
  {
    text: '한국어',
  },
  {
    text: 'English',
    link: 'https://sli.dev{{pathname}}',
  },
  {
    text: '简体中文',
    link: 'https://cn.sli.dev{{pathname}}',
  },
  {
    text: 'Français',
    link: 'https://fr.sli.dev{{pathname}}',
  },
  {
    text: 'Español',
    link: 'https://es.sli.dev{{pathname}}',
  },
  {
    text: 'Русский',
    link: 'https://ru.sli.dev{{pathname}}',
  },
  {
    text: 'Việt Nam',
    link: 'https://vn.sli.dev{{pathname}}',
  },
  {
    text: 'Deutsch',
    link: 'https://de.sli.dev{{pathname}}',
  },
  {
    text: 'Português (BR)',
    link: 'https://br.sli.dev{{pathname}}',
  },
  {
    text: 'Ελληνικά',
    link: 'https://el.sli.dev{{pathname}}',
  },
  {
    text: '日本語',
    link: 'https://ja.sli.dev{{pathname}}',
  },
]

const Customizations = [
  {
    text: '커스터마이징',
    link: '/custom/',
  },
  {
    text: '폴더 구조',
    link: '/custom/directory-structure',
  },
  {
    text: '폰트',
    link: '/custom/fonts',
  },
  {
    text: '하이라이팅',
    link: '/custom/highlighters',
  },
  {
    text: 'Vue 설정',
    link: '/custom/config-vue',
  },
  {
    text: 'Vite 설정',
    link: '/custom/config-vite',
  },
  {
    text: 'UnoCSS 설정',
    link: '/custom/config-unocss',
  },
  {
    text: 'Windi CSS 설정',
    link: '/custom/config-windicss',
  },
  {
    text: 'Monaco 설정',
    link: '/custom/config-monaco',
  },
  {
    text: 'KaTeX 설정',
    link: '/custom/config-katex',
  },
  {
    text: 'Mermaid 설정',
    link: '/custom/config-mermaid',
  },
  {
    text: '파서 설정',
    link: '/custom/config-parser',
  },
  {
    text: '단축키 설정',
    link: '/custom/config-shortcuts',
  },
  {
    text: 'Vue 전역 컨텍스트',
    link: '/custom/vue-context',
  },
  {
    text: '전역 레이어',
    link: '/custom/global-layers',
  }
]

const BuiltIn = [
  {
    text: '컴포넌트',
    link: '/builtin/components',
  },
  {
    text: '레이아웃',
    link: '/builtin/layouts',
  },
]

const Resources = [
  {
    text: '쇼케이스',
    link: '/showcases',
  },
  {
    text: '참고 자료',
    link: '/resources/learning',
  },
  {
    text: '큐레이션 커버',
    link: '/resources/covers',
  },
]

const slidebars = [
  {
    text: '가이드',
    children: Guide,
  },
  {
    text: '테마',
    children: Theme,
  },
  {
    text: '애드온',
    children: Addon,
  },
  {
    text: '커스터마이징',
    children: Customizations,
  },
  {
    text: '빌트인',
    children: BuiltIn,
  },
]

/**
 * @type {import('vitepress').UserConfig}
 */
module.exports = {
  title: 'Slidev',
  description: '개발자들을 위한 프레젠테이션 툴',
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['meta', { name: 'author', content: 'Anthony Fu' }],
    ['meta', { property: 'og:title', content: 'Slidev' }],
    ['meta', { property: 'og:image', content: 'https://ko.sli.dev/og-image.png' }],
    ['meta', { property: 'og:description', content: 'Presentation slides for developers' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:creator', content: '@slidevjs' }],
    ['meta', { name: 'twitter:image', content: 'https://ko.sli.dev/og-image.png' }],
    ['link', { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' }],
    ['link', { rel: 'preconnect', crossorigin: 'anonymous', href: 'https://fonts.gstatic.com' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@200;400;500&family=Inter:wght@200;400;500;600', rel: 'stylesheet' }],
  ],
  themeConfig: {
    repo: 'slidevjs/docs',
    logo: '/logo.svg',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '페이지 변경 제안하기',

    algolia: {
      appId: 'LCBV6MIFS6',
      apiKey: '1ff173fe73b20edc962c1c24c0b1c160',
      indexName: 'slidev',
      searchParameters: {
        // for translations maintainers: change the filter to your locale code (subdomain name)
        facetFilters: ['language:ko']
      }
    },

    nav: [
      {
        text: '가이드',
        items: Guide,
      },
      {
        text: '테마',
        items: Theme,
      },
      {
        text: '애드온',
        items: Addon,
      },
      {
        text: '커스터마이징',
        items: Customizations,
      },
      {
        text: '빌트인',
        items: BuiltIn,
      },
      {
        text: '리소스',
        items: Resources,
      },
      {
        text: '한국어',
        items: Translations,
      },
    ],

    sidebar: {
      '/guide/': slidebars,
      '/themes/': slidebars,
      '/addons/': slidebars,
      '/custom/': slidebars,
      '/builtin/': slidebars,
      '/resources/': slidebars,
      '/': slidebars,
    },
  },
}
