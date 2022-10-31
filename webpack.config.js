module.export = {
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				options: {
					presents: ['@babel/preset-react']
				}
			}
		]
	}
}