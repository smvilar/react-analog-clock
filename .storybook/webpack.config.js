const path = require('path')
module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    use: [
      {
        loader: require.resolve('ts-loader'),
        options: {
          reportFiles: ['stories/**/*.{ts|tsx}']
        }
      }
    ]
  })
  config.resolve.extensions.push('.ts', '.tsx')
  return config
}