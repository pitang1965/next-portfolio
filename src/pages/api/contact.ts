// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { client } from './client';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    console.log(req.body);
    await client.create({
      endpoint: 'contact',
      content: req.body,
    });
    res.status(200).json('OK');
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
  }
}
