import { atom } from 'jotai';

export type BlogDataType = {
  id: string;
  title: string;
  content: string;
  publishedAt: string;
};

export const blogDataAtom = atom<BlogDataType[]>([]);

