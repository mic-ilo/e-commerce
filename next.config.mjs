/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "plus.unsplash.com" },
      { hostname: "unsplash.com" },
    ],
  },
  //   experimental: {
  //     serverActions: true,
  //   },
};

export default nextConfig;
