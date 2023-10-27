/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: "/app/2023/robinhood_awards_2024",

  env: {
    API_BASE: "https://www.gforcesolution.com/app/2023/robinhood_awards_2024/api",
  },
  reactStrictMode: true,
  trailingSlash: true,
  transpilePackages: ["three"],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gforcesolution.com",
        port: "",
        pathname: "robinhood_awards_2024/**",
      },
    ],
  },
  exportPathMap: async function () {
    const paths = {
      //static page
      "/": { page: "/" },

    };
    return paths;
  },
};

module.exports = nextConfig;
