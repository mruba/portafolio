/** @type {import('next').NextConfig} */
const nextMDX = require("@next/mdx");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

module.exports = withMDX(
  withBundleAnalyzer({
    swcMinify: true,
    reactStrictMode: true,
    webpack(config, options) {
      config.module.rules.push({
        test: /\.(mp3)$/,
        type: "asset/resource",
        generator: {
          filename: "static/chunks/[path][name].[hash][ext]",
        },
      });
      return config;
    },
    pageExtensions: ["md", "mdx", "tsx", "ts", "jsx", "js"],
    images: {
      loader: "cloudinary",
      path: "https://res.cloudinary.com/mruba-media/image/upload",
    },
  })
);
