const purgecss = require('@fullhuman/postcss-purgecss');

const isProd = process.env.NODE_ENV === 'production';
const plugins = [require('postcss-easy-import'), require('tailwindcss'), require('autoprefixer')];

if (isProd) {
  plugins.push(
    purgecss({
      content: ['./**/*.tsx']
    })
  );
}

module.exports = {
  plugins
};
