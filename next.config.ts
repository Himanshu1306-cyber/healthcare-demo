/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Ye Next.js ko static HTML generate karne ko bolega
  images: {
    unoptimized: true, // GitHub Pages par images chalane ke liye zaroori hai
  },
  // Agar aapka repository name 'healthcare-demo' hai, toh ye dono lines add karein:
  basePath: '/healthcare-demo',
  assetPrefix: '/healthcare-demo',
};

export default nextConfig;