import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'pitang1965',
  apiKey: `${process.env.MICROCMS_API_KEY}`,
});
