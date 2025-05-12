/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        domains: [
          'images.unsplash.com', 
          'res.cloudinary.com',
          'via.placeholder.com',
          'cdn.pixabay.com',
          'storage.googleapis.com',
          'img.freepik.com',
          'assets.audiomack.com',
          'i.imgur.com',
          'encrypted-tbn0.gstatic.com',
          'randomuser.me'
        ],
      },
      experimental: {
        appDir: true,
      },
};

export default nextConfig;
