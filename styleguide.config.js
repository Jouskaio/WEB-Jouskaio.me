const path = require("path");
const webpack = require('webpack');
//import process from 'process/browser';


module.exports = {
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.(css|scss)$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env', ["@babel/preset-react", {"runtime": "automatic"}]],
              },
            },
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss'],
    },
    plugins: [
      new webpack.ProvidePlugin({
        process: "process/browser.json",
      }),
    ],
  },
  serverPort: 6060, // Modify this port number if necessary
  //components: 'components/**/*.tsx', // Change this to match the location of your components
  styleguideDir: 'styleguide',
  require: [
    path.join(__dirname, 'styles/globals.scss'), // Change this to match the location of your global SCSS file
  ],
  sections: [
    {
      name: 'Components',
      sections: [
        {
          name: 'Atom',
          components: 'components/atom/**/*.tsx'
        },
        {
          name: 'Molecule',
          components: 'components/molecule/**/*.tsx'
        },
        {
          name: 'Organism',
          components: 'components/organism/**/*.tsx'
        }
      ]
    }
  ]
};