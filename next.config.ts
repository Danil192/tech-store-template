/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: '*.unsplash.com' },
      { protocol: 'https', hostname: '*.ozone.ru' },
      { protocol: 'https', hostname: '*.ebayimg.com' },
      { protocol: 'https', hostname: '*.yandex.net' },
      { protocol: 'https', hostname: '*.yandex.ru' },
      { protocol: 'https', hostname: '*.ru' },
      { protocol: 'https', hostname: '*' },
    ],
  },
}

module.exports = nextConfig