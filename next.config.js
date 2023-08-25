/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ['./src/styles'],
    prependData: `@import "main.scss";`,
  },
}

module.exports = nextConfig
