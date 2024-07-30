/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "livedmu.lib.miamioh.edu" },
      { protocol: "https", hostname: "www.lib.miamioh.edu" },
      { protocol: "https", hostname: "tailwindui.com" },
      { protocol: "http", hostname: "localhost:3000" },
      { protocol: "http", hostname: "localhost:4000" },
    ],
  },
};

export default nextConfig;
