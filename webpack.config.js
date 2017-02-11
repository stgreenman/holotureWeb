var webpack = require('webpack');

module.exports = {
  entry: [
		'script!jquery/dist/jquery.min.js',
		'script!foundation-sites/dist/js/foundation.min.js',
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
      Footer: "app/components/Footer.jsx",
      Catalog: "app/components/Catalog",
      Folder: "app/components/Folder",
      ProductCard: "app/components/ProductCard",
      ProductModal: "app/components/ProductModal",
      Login: "app/components/Login.jsx",
			applicationStyles: 'app/styles/app.scss',
      configureStore: 'app/store/configureStore.jsx',
      actions: 'app/actions/index.jsx',
		},
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
	devtool: 'cheap-module-eval-source-map',
};
