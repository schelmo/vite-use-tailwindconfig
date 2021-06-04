const fs = require('fs')
const path = require('path')
import commonjs from '@rollup/plugin-commonjs';

const plugins = []
if (process.env.NODE_ENV == 'production')
  plugins.push(commonjs())

export default {
  plugins,
  resolve: {
    alias: {
      '@tailwindConfig': path.resolve(__dirname, 'tailwind.config.js'),
    },
  },
  optimizeDeps: {
    include: [
      '@tailwindConfig',
    ],
  },
  build: {
    commonjsOptions: {
      include: [
        'tailwind.config.js',
      ],
    }
  }
}
