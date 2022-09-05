// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { client } from './client';
import { PortfolioSchema } from 'src/components/portfolio/Portfolios';
import { MAX_NUMBER_OF_BLOGS } from 'src/libs/constants';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<PortfolioSchema>>
) {
  try {
    const data = await client.get({
      endpoint: 'portfolio',
      queries: { limit: MAX_NUMBER_OF_BLOGS },
    });
    res.status(200).json(data.contents);
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
  }
}
