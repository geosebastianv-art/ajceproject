/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.ajce.in",
        pathname: "/home/images/**",
      },
    ],
  },
};

export default nextConfig;
