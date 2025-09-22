/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // 👈 needed for static export if using <Image />
  },
  output: "export", // 👈 this makes Next.js generate static HTML/CSS/JS
};

export default nextConfig;
