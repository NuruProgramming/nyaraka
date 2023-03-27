import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // app level config options
  title: 'Nuru',
  description:
    'Lugha ya kiprogramu ya Kiswahili. Rahisi Kujifunza, Rahisi Kutumia.',

  srcDir: 'src',

  locales: {
    root: {
      label: 'Kiswahili',
      lang: 'sw',
    },
    en: {
      label: 'English',
      lang: 'en', // optional, will be added  as `lang` attribute on `html` tag
      link: '/en/', // default /fr/ -- shows on navbar translations menu, can be external

      // other locale specific properties...
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en' },
          { text: 'Docs', link: '/en/keywords/' },
        ],

        sidebar: [
          {
            text: 'Fundamentals',
            items: [
              { text: 'Keywords', link: '/en/keywords' },
              { text: 'Comments', link: '/en/comments' },
              { text: 'Identifiers', link: '/en/identifiers' },
              { text: 'Operators', link: '/en/operators' },
              { text: 'Functions', link: '/en/function' },
              { text: 'Builtins', link: '/en/builtins' },
            ],
          },
          {
            text: 'Data Types',
            items: [
              { text: 'Bool', link: '/en/bool' },
              { text: 'Null', link: '/en/null' },
              { text: 'Numbers', link: '/en/numbers' },
              { text: 'Strings', link: '/en/strings' },
            ],
          },
          {
            text: 'Data Structures',
            items: [
              { text: 'Arrays', link: '/en/arrays' },
              { text: 'Dictionaries', link: '/en/dictionaries' },
            ],
          },
          {
            text: 'Conditionals',
            items: [
              { text: 'If-Statements', link: '/en/ifStatements' },
              { text: 'Switch', link: '/en/switch' },
            ],
          },
          {
            text: 'Loops',
            items: [
              { text: 'For', link: '/en/for' },
              { text: 'While', link: '/en/while' },
            ],
          },
        ],
      },
    },
  },

  cleanUrls: true,
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
      {
        icon: {
          svg: '<svg role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M236.88,26.19a9,9,0,0,0-9.16-1.57L25.06,103.93a14.22,14.22,0,0,0,2.43,27.21L80,141.45V200a15.92,15.92,0,0,0,10,14.83,15.91,15.91,0,0,0,17.51-3.73l25.32-26.26L173,220a15.88,15.88,0,0,0,10.51,4,16.3,16.3,0,0,0,5-.79,15.85,15.85,0,0,0,10.67-11.63L239.77,35A9,9,0,0,0,236.88,26.19ZM183.53,208,100.85,135.5l119-85.29Z"></path></svg>',
        },
        link: 'https://t.me/NuruProgrammingChat',
      },
    ],
  },
})
