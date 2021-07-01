module.exports = {
  lang: 'zh-CN',
  title: ' ',
  description: ' ',
  base: '/tobackrise/',
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

    nav: [
      { text: '攀大指南', link: '/guide/' },
      { text: '文章', link: '/article/' },
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
      ]
    },
    
    lastUpdated: true,
    repo: 'oopstls/tobackrise',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
  }
}