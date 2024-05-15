const {override, addWebpackModuleRule} = require('customize-cra');

module.exports = override(
  addWebpackModuleRule({
    test: /\.(png|jpe?g|gif|svg)$/i,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'images/',
        },
      },
    ],
  })
);
