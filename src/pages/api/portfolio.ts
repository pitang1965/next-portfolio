// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { client } from './client';
import { PortfolioDataType } from 'src/components/portfolio/Portfolios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<PortfolioDataType>>
) {
  try {
    const data = await client.get({
      endpoint: 'portfolio',
      queries: { limit: 10000 },
    });
    res.status(200).json(data.contents);
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
  }
}
