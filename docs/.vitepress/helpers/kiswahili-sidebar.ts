import { Sidebar } from './types'

//link in Kiswahili docs is /name-of-the-file without file extention, eg. /maoni, make sure your file is placed in the src directory.

const kiswahiliSidebar: Sidebar = [
  {
    text: 'Misingi',
    items: [
      { text: 'Maneno Tengwa', link: '/maneno-tengwa' },
      { text: 'Maoni', link: '/maoni' },
      { text: 'Vitambulisho', link: '/vitambulisho' },
      { text: 'Viendeshaji', link: '/viendeshaji' },
      //     { text: 'Functions', link: '/function' },
      { text: 'Vilivyojengwa Ndani', link: '/vilivyojengwa-ndani' },
    ],
  },
  {
    text: 'Aina za Data',
    items: [
      { text: 'Buliani', link: '/buliani' },
      { text: 'Tupu', link: '/tupu' },
      { text: 'Nambari', link: '/nambari' },
      { text: 'Tungo', link: '/tungo' },
    ],
  },
  {
    text: 'Miundo ya Data',
    items: [
      { text: 'Safu', link: '/safu' },
      { text: 'Kamusi', link: '/kamusi' },
    ],
  },
  {
    text: 'Masharti',
    items: [
      { text: 'Kama', link: '/kama' },
      { text: 'Swichi', link: '/swichi' },
    ],
  },
  {
    text: 'Vitanzi',
    items: [
      { text: 'Kwa', link: '/kwa' },
      { text: 'While', link: '/while' },
    ],
  },
]

export default kiswahiliSidebar
