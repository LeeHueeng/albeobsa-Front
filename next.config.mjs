/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '',
        pathname: '/path/to/**',
      },
    ],
    domains: ['cdn.algumon.com', 'img.ruliweb.com', 'cdn2.ppomppu.co.kr']
  },
};

export default nextConfig;
