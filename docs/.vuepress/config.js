module.exports = {
  lang: 'zh-CN',
  title: ' ',
  description: ' ',
  base: '/',
  head: [
    // favicon
    [
      'link',
      {
        rel: 'icon',
        href: '/images/logo.png',
      },
    ],
  ],
  themeConfig: {
    logo: '/images/logo.png',
    search: false,

    nav: [
      { text: '攀大指南', link: '/guide/' },
      { text: '文章', link: '/article/' },
      { text: '留言板', link: '/board/'},
    ],

    sidebar: {
      '/guide/': [
        '',
        'a',
        'b',
      ],
      '/article/': [
        '',
        'a',
      ],
    },
    
    lastUpdated: true,
    repo: 'hululushp/tobackrise',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
  }
}