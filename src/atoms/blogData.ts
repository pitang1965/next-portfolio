import { atom } from 'jotai';

export type BlogDataType = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
};

export const blogDataAtom = atom<BlogDataType[]>([]);

