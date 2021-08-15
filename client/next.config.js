const withPlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})
const nextConfig = {
    images: {
        domains: ['res.cloudinary.com'],
    },
}
// next.js configuration
module.exports = withPlugins([withBundleAnalyzer, withOptimizedImages], nextConfig);
