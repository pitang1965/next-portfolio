// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { client } from './client';
import { BlogSchema } from 'src/components/blog/Blogs';
import { NUMBER_OF_LIMIT_FOR_BLOGS } from 'src/libs/constants';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<BlogSchema>>
) {
  try {
    const data = await client.get({
      endpoint: 'blog',
      queries: {
        offset: Number(req.query.offset),
        limit: NUMBER_OF_LIMIT_FOR_BLOGS,
      },
    });
    res.status(200).json(data.contents);
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
  }
}
