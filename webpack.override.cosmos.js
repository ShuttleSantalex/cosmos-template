const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (webpackConfig, env) => {
  return {
    ...webpackConfig,
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-react',
              ],
              plugins: [
                "babel-plugin-macros"
              ]
            }
          }
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack', 'url-loader'],
        },
        { // Loader for images
          test: /\.(jpe?g|png|jpg)$/i,
          use: [
            {
              loader: 'file-loader',
            }
          ]
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin(),
    ],
  };
};
