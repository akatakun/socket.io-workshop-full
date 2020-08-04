module.exports = {
  entry: './public/index.js',
  output: {
    path: __dirname + '/public/',
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  mode: 'development',
}

