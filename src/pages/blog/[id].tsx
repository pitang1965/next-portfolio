import React from 'react';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Layout } from 'src/components/layout/Layout';
import {
  Center,
  Container,
  Divider,
  Space,
  Text,
  Title,
  TypographyStylesProvider,
} from '@mantine/core';
import { formatDate } from 'src/utils/formatDate';
import { BlogDataType } from 'src/components/blog/Blogs';

type Props = {
  data: BlogDataType;
};

const BlogPage: NextPage<Props> = ({ data }) => {
  const router = useRouter();
  const { id } = router.query;

  if (typeof id !== 'string') {
    return (
      <Layout content='Blog'>
        <Container>
          <Center>
            <Text>データが取得できませんでした。</Text>
          </Center>
        </Container>
      </Layout>
    );
  }

  return (
    <Layout content='Blog'>
      <Container>
        <Space h='md' />
        {data !== undefined ? (
          <>
            <Title order={2} align='left'>
              {data.title}
            </Title>
            <Divider mt='sm' />
            <Text size='xs' color='dimmed'>
              {formatDate(data.publishedAt, 'YYYY.MM.DD')}
            </Text>
            <TypographyStylesProvider>
              <Text size='sm' weight={500}>
                <div dangerouslySetInnerHTML={{ __html: data.content }} />
              </Text>
            </TypographyStylesProvider>
          </>
        ) : (
          <Text>{`エラー：記事がありません。　id: ${id}`}</Text>
        )}
      </Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const origin = process.env.BASE_URL ?? 'http://localhost:3000';
  const res = await fetch(`${origin}/api/blog`);
  const blogs = await res.json();
  const paths = blogs.map((blog: BlogDataType) => `/blog/${blog.id}`);

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const id = context.params?.id;

    const origin = process.env.BASE_URL ?? 'http://localhost:3000';

    const res = await fetch(`${origin}/api/blog`);
    const blogs = await res.json();
    const data = blogs.filter((blog: BlogDataType) => blog.id === id);

    return {
      props: {
        data: data[0],
      },
    };
  } catch (err) {
    console.error(err);
    return {
      props: {
        err: 'データ取得で問題が発生しました。',
      },
    };
  }
};

export default BlogPage;
