/** @type {import('next').NextConfig} */


const nextConfig = {
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
			issuer: /\.[jt]sx?$/,
		});
	
		return config;
	},
};

export default nextConfig;