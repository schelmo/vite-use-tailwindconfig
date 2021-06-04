import './style.css'
import 'virtual:windi.css'

import Processor from 'windicss'
import windiConfig from '@windiConfig'
const processor = new Processor(windiConfig)
const fullConfig = processor.allConfig

document.querySelector('#app').innerHTML = `
  <h1 class="text-primary font-bold text-xl">Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
  tailwind theme colors:
  ${Object.keys(fullConfig.theme.colors).join(', ')}
`

console.log(windiConfig, fullConfig, processor.interpret('bg-primary text-black').styleSheet.build())
