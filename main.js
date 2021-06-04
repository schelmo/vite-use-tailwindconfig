import './style.css'

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '@tailwindConfig'
const fullConfig = resolveConfig(tailwindConfig)

document.querySelector('#app').innerHTML = `
  <h1 class="text-primary font-bold text-xl">Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
  tailwind theme colors:
  ${Object.keys(fullConfig.theme.colors).join(', ')}
`

console.log(tailwindConfig, fullConfig)
