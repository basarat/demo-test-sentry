import * as Sentry from "@sentry/nextjs";

export const dynamic = 'force-dynamic';

async function span_first() {
  return Sentry.startSpan({ name: 'span_first', op: 'function' }, async () => {
    await new Promise(resolve => setTimeout(resolve, 1_000))
  }); 
}

async function span_second() {
  return Sentry.startSpan({ name: 'span_second', op: 'function' }, async () => {
    await new Promise(resolve => setTimeout(resolve, 1_000))
  });
}

/** 
 * This is great for testing
 * - Sentry SDK reporting RSC Spans
 */
export default async function RSCPage() {
  await span_first();
  await span_second();

  return (
    <div>Two Spans on the server</div>
  );
}
