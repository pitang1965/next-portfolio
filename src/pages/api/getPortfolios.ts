// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { client } from './client';
import { PortfolioDataType } from 'src/atoms/portfolioData';

const minifiyData = (
  data: Array<PortfolioDataType>
): Array<PortfolioDataType> =>
  data.map((datum) => {
    const newObj: PortfolioDataType = {
      id: datum.id,
      title: datum.title,
      description: datum.description,
      siteUrl: datum.siteUrl,
      imageUrl: datum.imageUrl,
      dateFrom: datum.dateFrom,
      dateTo: datum.dateTo,
      publishedAt: datum.publishedAt,
    };

    return newObj;
  });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<PortfolioDataType>>
) {
  try {
    const data = await client.get({ endpoint: 'portfolio' });
    const minifiedData = minifiyData(data.contents);
    res.status(200).json(minifiedData);
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
  }
}
