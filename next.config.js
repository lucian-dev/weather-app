require("dotenv").config();

module.exports = {
  reactStrictMode: false,
  target: "serverless",
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["openweathermap.org"],
  },
};
