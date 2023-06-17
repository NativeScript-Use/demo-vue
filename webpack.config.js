const webpack = require('@nativescript/webpack');
const { resolve } = require('path');

module.exports = (env) => {
  webpack.init(env);

  webpack.chainWebpack((config) => {
    const isPreview = !!env.preview;
    if (!isPreview) {
      config.resolve.alias.set(
        '@nativescript-use/vue',
        resolve(__dirname, '../../packages/vue')
      );

      config.resolve.alias.set(
        '@nativescript-use/nativescript-orientation',
        resolve(__dirname, '../../packages/nativescript-orientation')
      );

      config.resolve.alias.set(
        '@nativescript-use/nativescript-keyboard',
        resolve(__dirname, '../../packages/nativescript-keyboard')
      );

      config.resolve.alias.set(
        '@nativescript-use/nativescript-clipboard',
        resolve(__dirname, '../../packages/nativescript-clipboard')
      );
    }
  });

  return webpack.resolveConfig();
};
