import { atom } from 'jotai';

export type PortfolioDataType = {
  id: string;
  title: string;
  description: string;
  siteUrl: string;
  imageUrl: {
    url: string;
    height: number;
    width: number;
  };
  dateFrom: string;
  dateTo: string;
  publishedAt: string;
};

export const portfolioDataAtom = atom<PortfolioDataType[]>([]);
