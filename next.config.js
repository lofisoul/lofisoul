require('dotenv').config();

module.exports = {
	env: {
		SC_ID: process.env.SC_ID,
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			issuer: {
				test: /\.(js|ts)x?$/,
			},
			use: [
				{
					loader: '@svgr/webpack',
					options: {
						svgoConfig: {
							plugins: [
								{
									removeViewBox: false,
								},
							],
						},
					},
				},
			],
		});

		return config;
	},
};
