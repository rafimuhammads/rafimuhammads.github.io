/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Tambahkan baris ini untuk static export
  images: {
    unoptimized: true, // Wajib jika ingin gambar muncul di GitHub Pages
  },
};

export default nextConfig;