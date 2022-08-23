import React from 'react';
import { useRouter } from 'next/router';
import type { NextPage } from 'next';
import { Layout } from 'src/components/layout/Layout';
import {
  Container,
  Divider,
  Space,
  Text,
  Title,
  TypographyStylesProvider,
} from '@mantine/core';

import { useAtom } from 'jotai';
import { blogDataAtom, BlogDataType } from 'src/atoms/blogData';

const BlogPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // ブログデータの取得
  const [blogData] = useAtom(blogDataAtom);
  const blogs: BlogDataType[] = blogData.filter((data) => data.id === id);
  const blog = blogs[0];

  return (
    <Layout content='Blog'>
      <Container>
        <Space h='md' />
        {blog ? (
          <>
            <Title order={2} align='left'>
              {blog.title}
            </Title>
            <Divider mt='sm' />
            <TypographyStylesProvider>
              <Text size='sm' weight={500}>
                <div dangerouslySetInnerHTML={{ __html: blog.content }} />
              </Text>
            </TypographyStylesProvider>
          </>
        ) : (
          <h2>エラー：記事がありません</h2>
        )}
      </Container>
    </Layout>
  );
};

export default BlogPage;
