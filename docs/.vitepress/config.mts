import { defineConfig } from 'vitepress'
import kiswahiliSidebar from './helpers/kiswahili-sidebar'
import englishSidebar from './helpers/english-sidebar'

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
          { text: 'Home', link: '/en/' },
          { text: 'Docs', link: '/en/maneno-tengwa' },
        ],

        sidebar: englishSidebar,
        outline: {
          label: 'On this page',
        },
        notFound: {
          title: 'PAGE NOT FOUND',
          quote:
            'Maybe we have moved the page or you have used an incorrect link',
          linkLabel: 'Go Home',
          linkText: 'Take Me Home',
        },
      },
    },
  },

  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    nav: [
      { text: 'Nyumbani', link: '/' },
      { text: 'Nyaraka', link: '/maneno-tengwa' },
    ],

    sidebar: kiswahiliSidebar,
    outline: {
      label: 'Katika ukurasa huu',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nuruprogramming' },
      { icon: 'twitter', link: 'https://twitter.com/NuruProgramming' },
      {
        icon: {
          svg: '<svg role="img" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M236.88,26.19a9,9,0,0,0-9.16-1.57L25.06,103.93a14.22,14.22,0,0,0,2.43,27.21L80,141.45V200a15.92,15.92,0,0,0,10,14.83,15.91,15.91,0,0,0,17.51-3.73l25.32-26.26L173,220a15.88,15.88,0,0,0,10.51,4,16.3,16.3,0,0,0,5-.79,15.85,15.85,0,0,0,10.67-11.63L239.77,35A9,9,0,0,0,236.88,26.19ZM183.53,208,100.85,135.5l119-85.29Z"></path></svg>',
        },
        link: 'https://t.me/NuruProgrammingChat',
      },
    ],

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Tafuta',
                buttonAriaLabel: 'Tafuta',
              },
              modal: {
                noResultsText: 'Hamna Matokeo yaliyopatikana',
                resetButtonTitle: 'Ondoa Ulichotafuta',
                displayDetails: 'Onyesha Maelezo Zaidi',
                backButtonTitle: 'Rudi Nyuma',
                footer: {
                  selectText: 'Chagua',
                  navigateText: 'Badili',
                  closeText: 'Funga',
                  selectKeyAriaLabel: 'Chagua',
                  navigateUpKeyAriaLabel: 'Panda Juu',
                  navigateDownKeyAriaLabel: 'Shuka Chini',
                  closeKeyAriaLabel: 'Funga',
                },
              },
            },
          },
          en: {
            translations: {
              button: {
                buttonText: 'Search documents',
                buttonAriaLabel: 'Search documents',
              },
              modal: {
                noResultsText: 'No relevant results found',
                resetButtonTitle: 'Clear query conditions',
                displayDetails: 'Show Detailed Results',
                backButtonTitle: 'Go Back',
                footer: {
                  selectText: 'Choose',
                  navigateText: 'Switch',
                  closeText: 'Close',
                  selectKeyAriaLabel: 'Choose',
                  navigateUpKeyAriaLabel: 'Go Up',
                  navigateDownKeyAriaLabel: 'Go Down',
                  closeKeyAriaLabel: 'Close',
                },
              },
            },
          },
        },
      },
    },

    notFound: {
      title: 'UKURASA HAUJAPATIKANA',
      quote: 'Inaweza ikawa ukurasa tumeuhamisha au umekosea',
      linkLabel: 'Rudi Nyumbani',
      linkText: 'Nipeleke Nyumbani',
    },

    footer: {
      message: 'All code is open source if you can read Assembly',
      copyright: 'Copyleft 🄯 Avicenna',
    },
  },

  lastUpdated: true,

  sitemap: {
    hostname: 'https://nuruprogramming.org/',
    lastmodDateOnly: true,
  },
})
