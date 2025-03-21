import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js';

export default (phase) => {
	const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  
	/** @type {import('next').NextConfig} */
	
	const nextConfig = {
		basePath: isDev ? undefined : '/dive-sea',
		assetPrefix: isDev ? undefined : '/dive-sea',
		webpack: (config) => {
			config.module.rules.push({
				test: /\.svg$/,
				use: ['@svgr/webpack'],
			})

			return config;
		}
	};

	return nextConfig;
};