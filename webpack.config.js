const webpack = require('@nativescript/webpack');
const { resolve } = require('path');

module.exports = (env) => {
  webpack.init(env);

  webpack.chainWebpack((config) => {
    const isPreview = !!env.preview;
    if (!isPreview) {
      const packages = [
        {
          package: "@nativescript-use/vue",
          path: "../../packages/vue"
        },
        {
          package: "@nativescript-use/nativescript-orientation",
          path: "../../packages/nativescript-orientation"
        },
        {
          package: "@nativescript-use/nativescript-keyboard",
          path: "../../packages/nativescript-keyboard"
        },
        {
          package: "@nativescript-use/nativescript-clipboard",
          path: "../../packages/nativescript-clipboard"
        },
        {
          package: "@nativescript-use/nativescript-media-query",
          path: "../../packages/nativescript-media-query"
        },
      ]
      packages.forEach(package => (
        config.resolve.alias.set(
          package.package,
          resolve(__dirname, package.path)
        )
      ))


    }
  });

  return webpack.resolveConfig();
};
