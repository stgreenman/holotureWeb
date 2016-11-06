var webpack = require('webpack');

module.exports = {
  entry: [
		'script!jquery/dist/jquery.min.js',
		'script!foundation-sites/dist/foundation.min.js',
		'./app/app.jsx',
	],
	externals: {
		jquery: 'jQuery',
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery': 'jquery',
		})
	],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
		root: process.cwd(),
		alias: {
			Main: "app/components/Main.jsx",
      Nav: "app/components/Nav.jsx",
      CatalogToFolder: "app/components/CatalogToFolder",
      Catalog: "app/components/Catalog",
      Folder: "app/components/Folder",
      ProductRow: "app/components/ProductRow",
			applicationStyles: 'app/styles/app.scss',
		},
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
	devtool: 'cheap-module-eval-source-map',
};