const webpack = require('@nativescript/webpack');
const { resolve } = require('path');

module.exports = (env) => {
  webpack.init(env);

  webpack.chainWebpack((config) => {
    const isPreview = !!env.preview;
    if (!isPreview) {
      config.resolve.alias.set(
        '@vallemar/nativescript-vueuse',
        resolve(__dirname, '../../packages/nativescript-vueuse')
      );

      config.resolve.alias.set(
        '@vallemar/nativescript-orientation',
        resolve(__dirname, '../../packages/nativescript-orientation')
      );

      config.resolve.alias.set(
        '@vallemar/nativescript-keyboard',
        resolve(__dirname, '../../packages/nativescript-keyboard')
      );

      config.resolve.alias.set(
        '@vallemar/nativescript-clipboard',
        resolve(__dirname, '../../packages/nativescript-clipboard')
      );
    }
  });

  return webpack.resolveConfig();
};
