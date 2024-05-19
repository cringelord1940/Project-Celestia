// @ts-check
await import('./global/env.mjs')
/**
 * Don't be scared of the generics here.
 * All they do is to give us autocompletion when using this.
 *
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */
import 'dotenv/config'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import { createRequire } from 'node:module'
import withPWAInit from '@ducanh2912/next-pwa'
import plugins from 'next-compose-plugins'
import { withSentryConfig } from '@sentry/nextjs'
// import { withAxiom } from 'next-axiom'
import bundleAnalyzer from '@next/bundle-analyzer'
import million from 'million/compiler'

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const withPWA = withPWAInit({
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  dest: 'public',
  fallbacks: {
    //image: "/static/images/fallback.png",
    document: '/offline',
  },
  register: true,
})

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const require = createRequire(import.meta.url)

const standaloneExport = process.env.EXPORT === 'standalone' && {
  output: 'standalone',
}

const nextConfig = {
  webpack: (config, { webpack, /*dev ,*/ isServer }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        React: 'react',
      }),
    )

    config.resolve.alias['@aurora'] = path.join(__dirname, 'aurora')
    config.resolve.alias['@app'] = path.join(__dirname, 'app')
    config.resolve.alias['@global'] = path.join(__dirname, 'global')
    config.resolve.alias['@components'] = path.join(__dirname, 'app/components')
    config.resolve.alias['@contents'] = path.join(__dirname, 'app/contents')
    config.resolve.alias['@server'] = path.join(__dirname, 'server')

    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      exclude: config.exclude,
      use: [
        {
          loader: require.resolve('url-loader'),
          options: {
            limit: config.inlineImageLimit,
            fallback: require.resolve('file-loader'),
            publicPath: `${config.assetPrefix}/_next/static/images/`,
            outputPath: `${isServer ? '../' : ''}static/images/`,
            name: '[name]-[hash].[ext]',
            esModule: config.esModule || false,
          },
        },
      ],
    })

    config.module.rules.push({
      test: /\.mp4$/,
      use: ['file-loader'],
    })
    return config
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  compiler: {
    styledComponents: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
  ...standaloneExport,
  sentry: {
    widenClientFileUpload: true,
    transpileClientSDK: true,
    tunnelRoute: '/monitoring',
    hideSourceMaps: true,
    disableLogger: true,
    automaticVercelMonitors: true,
  },
}

const sentryWebpackPluginOptions = {
  silent: true,
  org: 'theiceji',
  project: 'aurora',
}

const millionConfig = {
  auto: { rsc: true },
}

export default plugins(
  [
    // withAxiom,
    [withSentryConfig, sentryWebpackPluginOptions],
    withBundleAnalyzer,
    withPWA,
    [million.next, millionConfig],
  ],
  nextConfig,
)
