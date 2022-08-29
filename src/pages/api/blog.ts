// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { client } from './client';
import { BlogDataType } from 'src/components/blog/Blogs';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<BlogDataType>>
) {
  try {
    const data = await client.get({ endpoint: 'blog' });
    res.status(200).json(data.contents);
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
  }
}