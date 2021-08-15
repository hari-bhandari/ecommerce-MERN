const withPlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');
const withPrefresh = require("@prefresh/next");
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})
const withPreact = require('next-plugin-preact');

const nextConfig = {
    images: {
        domains: ['res.cloudinary.com'],
    },
}

// next.js configuration
module.exports = withPlugins([withPreact({}), withBundleAnalyzer,], nextConfig);
