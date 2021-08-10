const withPlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})
// next.js configuration
const nextConfig = {};

module.exports = withPlugins([withBundleAnalyzer, withOptimizedImages], nextConfig);
