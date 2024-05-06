// This file configures the initialization of Sentry for edge features (middleware, edge routes, and so on).
// The config you add here will be used whenever one of the edge features is loaded.
// Note that this config is unrelated to the Vercel Edge Runtime and is also required when running locally.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";
import * as base from './sentry.base.config';

Sentry.init({
  dsn: base.dsn,
  tracesSampleRate: base.tracesSampleRate,
  debug: base.debug,

  // Enable Spotlight on Dev (https://spotlightjs.com)
  spotlight: true,
});

