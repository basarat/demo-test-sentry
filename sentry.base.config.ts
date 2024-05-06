// Adjust this value in production, or use tracesSampler for greater control
// Right now 1 => 100% of traces are sent to Sentry
export const tracesSampleRate = 1;

/** Destination */
export const dsn = "https://d6300616b156244e4c61ddc7bfb06360@o4507179418517504.ingest.us.sentry.io/4507179434115072";

// Setting this option to true will print useful information to the console while you're setting up Sentry.
export const debug = false;
