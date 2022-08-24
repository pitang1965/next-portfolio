// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { client } from './client';
import { BlogDataType } from 'src/atoms/blogData';

const minifiyData = (data: Array<BlogDataType>): Array<BlogDataType> =>
  data.map((datum) => {
    const newObj: BlogDataType = {
      id: datum.id,
      title: datum.title,
      content: datum.content,
      createdAt: datum.createdAt,
    };

    return newObj;
  });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<BlogDataType>>
) {
  try {
    const data = await client.get({ endpoint: 'blog' });
    const minifiedData = minifiyData(data.contents);
    res.status(200).json(minifiedData);
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
  }
}
