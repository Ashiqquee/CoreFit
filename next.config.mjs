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
          'randomuser.me',
          'images.pexels.com',
          'i.ytimg.com',
          'images.squarespace-cdn.com',
          'i0.wp.com/www.styleswardrobe.com'
        ],
      },
      experimental: {
        appDir: true,
      },
};

export default nextConfig;
