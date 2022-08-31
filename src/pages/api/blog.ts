// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { client } from './client';
import { BlogSchema } from 'src/components/blog/Blogs';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<BlogSchema>>
) {
  try {
    const data = await client.get({
      endpoint: 'blog',
      queries: { limit: 10000 },
    });
    res.status(200).json(data.contents);
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
  }
}
