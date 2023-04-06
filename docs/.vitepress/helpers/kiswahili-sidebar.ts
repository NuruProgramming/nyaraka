import { Sidebar } from './types'

const kiswahiliSidebar: Sidebar = [
  {
    text: 'Misingi',
    items: [
      { text: 'Keywords', link: '/' },
      //link in Kiswahili docs is /name-of-the-file without file extention, eg. /maoni, make sure your file is placed in the src directory.
      { text: 'Maoni', link: '/' },
    ],
  },
]

export default kiswahiliSidebar
