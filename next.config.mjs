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
    domains: [`img2.quasarzone.com`, `cdn.ppomppu.co.kr`, `quasarzone.com`, 'static.ppomppu.co.kr', 'cdn.algumon.com', 'img.ruliweb.com', 'cdn2.ppomppu.co.kr', 'lh3.googleusercontent.com', `img.eomisae.co.kr`]
  },
};

export default nextConfig;
