/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      /** Allow vimeo thumbnails to be served by the next/image component */
      {
        protocol: 'https',
        hostname: 'i.vimeocdn.com',
        pathname: '/video/**',
      },
    ],
  },
  redirects: async () => {
    return [
      {
        source: '/special/:slug',
        destination: '/pricing?special=:slug',
        permanent: false,
      },
    ];
  }
};

module.exports = nextConfig;

/** 
 * Injected content via Sentry wizard below
 */
const { withSentryConfig } = require("@sentry/nextjs");
// Export modified config
module.exports = withSentryConfig(
  // Extending existing config
  module.exports,
  {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    // Suppresses source map uploading logs during build
    silent: true,
    org: "booleanart",
    project: "website",

    // An auth token is required for uploading source maps.
    authToken: process.env.SENTRY_AUTH_TOKEN,
  },
  {
    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Transpiles SDK to be compatible with IE11 (increases bundle size)
    transpileClientSDK: true,

    // Uncomment to route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
    // This can increase your server load as well as your hosting bill.
    // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
    // side errors will fail.
    // tunnelRoute: "/monitoring",

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,

    // Enables automatic instrumentation of Vercel Cron Monitors.
    // See the following for more information:
    // https://docs.sentry.io/product/crons/
    // https://vercel.com/docs/cron-jobs
    automaticVercelMonitors: true,
  }
);
