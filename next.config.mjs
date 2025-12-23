/** @type {import('next').NextConfig} */
const isStaticExport = true;
const nextConfig = {
  output: 'export',
  basePath: '/ko4lax',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_STATIC_EXPORT: isStaticExport ? '1' : '0',
  },
};

export default nextConfig;
