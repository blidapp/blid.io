/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'dist',
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
