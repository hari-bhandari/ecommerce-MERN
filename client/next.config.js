const withPlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

const withPrefresh = require('@prefresh/next');
const preact = require('preact');
const withPreact = require('next-plugin-preact');
const nextConfig = {
    images: {
        domains: ['res.cloudinary.com'],
    },
}
// next.js configuration
module.exports = withPlugins([withPreact({
    experimental: {
        modern: true,
    },
}), withBundleAnalyzer, withOptimizedImages], nextConfig);
