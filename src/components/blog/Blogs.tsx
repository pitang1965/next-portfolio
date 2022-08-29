import React, { FC } from 'react';
import { Container, Stack } from '@mantine/core';
import { BlogCard } from './BlogCard';

import { useAtom } from 'jotai';
import { isMobileUiAtom } from 'src/atoms/uiMode';

export type BlogDataType = {
  id: string;
  title: string;
  content: string;
  publishedAt: string;
};

type Props = {
  blogData: BlogDataType[];
  isHomePage: boolean;
};

export const Blogs: FC<Props> = ({ blogData, isHomePage }) => {
  // ブログをいくつ表示するかどうか（モバイル表示かどうか、ホームページかどうかで異なる）
  const [isMobileUi] = useAtom(isMobileUiAtom);
  const numberToShow = isHomePage ? (isMobileUi ? 4 : 5) : isMobileUi ? 5 : 10;

  return (
    <Container sx={{ width: '100%' }}>
      <Stack spacing='xl'>
        {blogData?.slice(0, numberToShow).map((blog) => (
          <BlogCard data={blog} key={blog.id} />
        ))}
      </Stack>
    </Container>
  );
};
