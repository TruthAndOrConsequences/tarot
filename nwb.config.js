require('dotenv').config()
const CopyWebpackPlugin = require('copy-webpack-plugin')
const isDev = process.env.NODE_ENV !== 'production'
module.exports = function(nwb) {
  return {
    type: 'react-app',
    babel: {
      presets: ['es2015', 'stage-0', 'react']
    },
    webpack: {
      extra: {
        resolve: {
          modules: ['node_modules', './src']
        },
        plugins: [
          new CopyWebpackPlugin([
            { from: 'src/assets', to: 'assets' },
          ])
        ]
      }
    }
  }
}
