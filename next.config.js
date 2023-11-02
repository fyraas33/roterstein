/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
reactStrictMode: true,

images: {
  remotePatterns: [
      { hostname: 'res.cloudinary.com', protocol: 'https', port: '' }
  ]
},

 
      
}

module.exports = nextConfig
