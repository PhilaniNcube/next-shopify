const { withFrameworkConfig } = require('./framework/common/config');

module.exports = withFrameworkConfig({
  reactStrictMode: true,
  i18n: {
    locales: ['en-UK', 'en-ZA'],
    defaultLocale: 'en-UK',
  },
});

console.log('next.config.js', JSON.stringify(module.exports, null, 2));
