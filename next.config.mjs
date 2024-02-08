/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.xx.fbcdn.net',
                port: '',
            },
        ],
    },
};

export default nextConfig;
