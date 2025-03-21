/** @type {import('next').NextConfig} */

const nextConfig = {
	output: 'export',
	basePath: process.env.NODE_ENV === 'production' ? '/dive-sea' : '',
  	assetPrefix: process.env.NODE_ENV === 'production' ? '/dive-sea' : '',
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});
	
		return config;
	},
  };
  
  export default nextConfig;