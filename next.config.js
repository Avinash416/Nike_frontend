/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: ["res.cloudinary.com"],
    },
     experimental: {
        pageDataCollectionTimeout: 300000, // Set this value as needed (in milliseconds)
    },
};

module.exports = nextConfig;
