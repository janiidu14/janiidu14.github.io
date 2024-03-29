/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  // output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig;

// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });

// const withPWA = require("next-pwa");

// module.exports = Object.assign(
//   withBundleAnalyzer(
//     withPWA({
//       trailingSlash: true,
//       webpack: (config) => {
//         // Fixes npm packages that depend on `fs` module
//         config.resolve.fallback = { fs: false };
//         return config;
//       },
//       reactStrictMode: true,
//       images: {
//         domains: [
//           "cdn.buymeacoffee.com",
//           "res.cloudinary.com",
//           "imgur.com",
//           "i.imgur.com",
//           "cutt.ly",
//           "activity-graph.herokuapp.com",
//           "images.unsplash.com",
//         ],
//       },
//       // PWA Setting
//       pwa: {
//         dest: "public",
//         register: true,
//         skipWaiting: true,
//         disable: process.env.NODE_ENV === "development",
//         publicExcludes: ["!resume.pdf"], 
//       },
//     })
//   ),
  
// );
