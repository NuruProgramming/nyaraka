import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // app level config options
  lang: 'sw',
  title: 'Nuru',
  titleTemplate: 'Lugha ya kiprogramu ya Kiswahili',
  description:
    'Lugha ya kiprogramu ya Kiswahili. Rahisi Kujifunza, Rahisi Kutumia.',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Nyumbani', link: '/' },
      { text: 'Mifano', link: '/' },
    ],

    sidebar: [
      {
        text: 'Mifano',
        items: [
          { text: 'Mifano', link: '/' },
          { text: 'Habari Dunia', link: '/' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nuruprogramming' },
      { icon: 'twitter', link: 'https://twitter.com/AviTheDev' },
    ],
  },
})
