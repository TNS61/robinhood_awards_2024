/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: "/app/2023/robinhood_awards",

  env: {
    API_BASE: "https://www.gforcesolution.com/app/2023/robinhood_awards/api",
  },
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gforcesolution.com",
        port: "",
        pathname: "robinhood_awards/**",
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
