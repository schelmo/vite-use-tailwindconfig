const fs = require('fs')
const path = require('path')

export default {
  resolve: {
    alias: {
      'tailwind.config.js': path.resolve(__dirname, 'tailwind.config.js'),
    },
  },
  optimizeDeps: {
    include: [
      'tailwind.config.js',
    ],
  },
}
