// next.config.mjs
const repo = 'portfolio' // <- your repo name on GitHub
const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
export default {
  output: 'export',
  images: { unoptimized: true },
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : undefined,
}
