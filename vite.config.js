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
  resolve: {
    alias: {
      '@windiConfig': path.resolve(__dirname, 'windi.config.js'),
    },
  },
  optimizeDeps: {
    include: [
      '@windiConfig',
    ],
  },
}
