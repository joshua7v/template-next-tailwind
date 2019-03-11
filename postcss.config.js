const tailwindcss = require('tailwindcss');
const purgecss = require('@fullhuman/postcss-purgecss');

const isProd = process.env.NODE_ENV === 'production';
const plugins = [tailwindcss('./tailwind.js'), require('autoprefixer')];

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
