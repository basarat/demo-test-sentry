// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
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
