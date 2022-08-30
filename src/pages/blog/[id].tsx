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
import { client } from 'src/pages/api/client';

type Props = {
  data: BlogDataType;
};

const BlogDetailPage: NextPage<Props> = ({ data }) => {
  const router = useRouter();
  const { id } = router.query;

  if (typeof id !== 'string' || data === undefined) {
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

  if (router.isFallback) {
    return <Text>Loading...</Text>;
  }

  return (
    <Layout content='Blog'>
      <Container>
        <Space h='md' />
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
      </Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await client.get({ endpoint: 'blog', queries: { limit: 5 } });
  const paths = res.contents.map((blog: BlogDataType) => `/blog/${blog.id}`);

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const id = context.params?.id;
    const res = await client.get({
      endpoint: 'blog',
      contentId: id as string,
      queries: { limit: 1 },
    });

    return {
      props: {
        data: res,
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

export default BlogDetailPage;
