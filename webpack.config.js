import HtmlWebpackPlugin from "html-webpack-plugin";

export const module = {
	rules: [
		{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: {
				loader: "babel-loader",
			},
		},
		{
			test: /\.html$/,
			use: [
				{
					loader: "html-loader",
				},
			],
		},
	],
};
export const plugins = [
	new HtmlWebpackPlugin({
		template: "./src/index.html",
		filename: "./index.html",
	}),
];
