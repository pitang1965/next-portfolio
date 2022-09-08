// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { client } from './client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const data = await client.get({
      endpoint: 'blog',
      queries: {
        offset: 0,
        limit: 1,
        fields: '',
      },
    });
    res.status(200).json(data.totalCount);
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
  }
}
