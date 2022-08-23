import React, { FC } from 'react';
import { Container, Stack } from '@mantine/core';
import { BlogCard } from './BlogCard';

import { useAtom } from 'jotai';
import { isMobileUiAtom } from 'src/atoms/uiMode';
import { blogDataAtom } from 'src/atoms/blogData';

type Props = {
  isHomePage: boolean;
};

export const Blogs: FC<Props> = ({ isHomePage }) => {
  // ブログをいくつ表示するかどうか（モバイル表示かどうか、ホームページかどうかで異なる）
  const [isMobileUi] = useAtom(isMobileUiAtom);
  const numberToShow = isHomePage ? (isMobileUi ? 4 : 5) : isMobileUi ? 5 : 10;

  // ブログデータの取得
  const [blogData] = useAtom(blogDataAtom);

  return (
    <Container sx={{ width: '100%' }}>
      <Stack spacing='xl'>
        {blogData.slice(0, numberToShow).map((blog) => (
          <BlogCard data={blog} key={blog.id} />
        ))}
      </Stack>
    </Container>
  );
};
