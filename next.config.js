/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'], // ✅ izinkan ambil gambar dari Cloudinary
  },
};

module.exports = nextConfig;
