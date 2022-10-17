const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true
  },
  reactStrictMode: true
})
