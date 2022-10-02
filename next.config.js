/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['upload.wikimedia.org', 'images.unsplash.com'],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: { and: [/\.(js|ts|md)x?$/] },
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        options: { icon: true },
                        svgoConfig: {
                            plugins: [
                                {
                                    name: 'removeViewBox',
                                    active: false,
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

module.exports = nextConfig;
