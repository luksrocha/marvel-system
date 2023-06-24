/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        PUBLIC_API_KEY: process.env.PUBLIC_API_KEY,
        PRIVATE_API_KEY: process.env.PRIVATE_API_KEY,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'i.annihil.us',
            },
        ],
    },
};

module.exports = nextConfig;
