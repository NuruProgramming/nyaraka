import { Sidebar } from './types'

//link in Kiswahili docs is /name-of-the-file without file extention, eg. /maoni, make sure your file is placed in the src directory.

const kiswahiliSidebar: Sidebar = [
  {
    text: 'Misingi',
    items: [
      { text: 'Maneno Tengwa', link: '/maneno-tengwa' },
      { text: 'Maoni', link: '/maoni' },
      { text: 'Vitambulisho', link: '/vitambulisho' },
      //     { text: 'Identifiers', link: '/identifiers' },
      { text: 'Viendeshaji', link: '/viendeshaji' },
      //     { text: 'Functions', link: '/function' },
      //     { text: 'Builtins', link: '/builtins' },
    ],
  },
  // {
  //   text: 'Aina za Data',
  //   items: [
  //     { text: 'Bool', link: '/bool' },
  //     { text: 'Null', link: '/null' },
  //     { text: 'Numbers', link: '/numbers' },
  //     { text: 'Strings', link: '/strings' },
  //   ],
  // },
  // {
  //   text: 'Miundo ya Data',
  //   items: [
  //     { text: 'Arrays', link: '/arrays' },
  //     { text: 'Dictionaries', link: '/dictionaries' },
  //   ],
  // },
  // {
  //   text: 'Masharti',
  //   items: [
  //     { text: 'If-Statements', link: '/ifStatements' },
  //     { text: 'Switch', link: '/switch' },
  //   ],
  // },
  // {
  //   text: 'Vitanzi',
  //   items: [
  //     { text: 'For', link: '/for' },
  //     { text: 'While', link: '/while' },
  //   ],
  // },
]

export default kiswahiliSidebar
