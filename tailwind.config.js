module.exports = {
  mode: 'jit',
  purge: [
    './index.html',
    './main.js',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(100, 108, 255)',
      }
    }
  }
}
