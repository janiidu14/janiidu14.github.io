/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
  });
   
  const withPWA = require("next-pwa");
   
  module.exports = withBundleAnalyzer(
    withPWA({
      webpack: true,
      webpack: (config) => {
        // Fixes npm packages that depend on `fs` module
        config.resolve.fallback = { fs: false };
        return config;
      },
      reactStrictMode: true,
      images: {
        domains: [
          "cdn.buymeacoffee.com",
          "res.cloudinary.com",
          "imgur.com",
          "i.imgur.com",
          "cutt.ly",
          "activity-graph.herokuapp.com",
          "images.unsplash.com",
        ],
      },
   
      // Pwa Setting
      pwa: {
        dest: "public",
        register: true,
        skipWaiting: true,
        disable: process.env.NODE_ENV === "development",
        publicExcludes: ["!resume.pdf"], 
      },

      // Export Path Map Configuration
    exportPathMap: async function () {
      // Define the export paths for your application
      return {
        "/": { page: "/" },
        // Add more export paths as needed
      };
    },
    })
  );