/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	compiler: {
		styledComponents: {
			ssr: true,
			displayName: false,
		},
	},
	images: {},
};

module.exports = nextConfig;
