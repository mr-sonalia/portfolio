/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	compiler: {
		styledComponents: {
			ssr: true,
			displayName: true,
		},
	},
	images: {
		domains: ["www.neoshealthtech.com"],
	},
};

module.exports = nextConfig;
