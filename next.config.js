/** @type {import('next').NextConfig} */
require("dotenv").config();

const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ["openweathermap.org", "cdn-icons-png.flaticon.com"],
    },
}

module.exports = nextConfig
