const withTypescript = require('@zeit/next-typescript');
const withPreact = require('@zeit/next-preact');
const withCSS = require('@zeit/next-css');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = withPreact(
  withTypescript(
    withCSS({
      webpack(config, options) {
        if (options.isServer) config.plugins.push(new ForkTsCheckerWebpackPlugin());

        return config;
      }
    })
  )
);
