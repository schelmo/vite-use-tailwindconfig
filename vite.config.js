import windi from 'vite-plugin-windicss'
import path from 'path'

export default {
  plugins: [windi({
    scan: {
      dirs: [
        '.',
      ],
    }
  })],
}
