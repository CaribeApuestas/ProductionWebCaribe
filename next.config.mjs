/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'v2l.traincdn.com',
          },
        ],
      },
};

export default nextConfig;
