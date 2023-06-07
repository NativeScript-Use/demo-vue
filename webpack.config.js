const webpack = require("@nativescript/webpack");
const {resolve} = require("path");

module.exports = (env) => {
    webpack.init(env);

    webpack.chainWebpack((config) => {
        const isPreview = !!env.preview;
        if(!isPreview){
            config.resolve.alias.set(
                '@vallemar/nativescript-vueuse',
                resolve(__dirname, '../publish')
            );
        }

        config.resolve.alias.set('@nativescript/core', '@akylas/nativescript')

    });

    return webpack.resolveConfig();
};
