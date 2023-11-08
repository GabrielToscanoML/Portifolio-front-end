/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            hostname: 'github.com',
          },
          {
            hostname: 'user-images.githubusercontent.com',
          }
        ],
    },
}

module.exports = nextConfig;