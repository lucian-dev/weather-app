require("dotenv").config();

module.exports = {
  reactStrictMode: false,
  target: "serverless",
  images: {
    domains: ["openweathermap.org"],
  },
};
