import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { Layout } from 'src/components/layout/Layout';
import {
  Center,
  Container,
  Divider,
  Loader,
  Space,
  Title,
} from '@mantine/core';
import { Blogs, BlogDataType } from 'src/components/blog/Blogs';

type Props = {
  data: BlogDataType[];
};

const BlogPage: NextPage<Props> = ({ data }) => {
  return (
    <Layout content='Blog'>
      <Container>
        <Space h='md' />
        <Title order={2} align='left'>
          Blog
        </Title>
        <Divider mt='sm' />
        <Blogs blogData={data} isHomePage={false} />
        <Center>
          <Loader color='red' />
        </Center>
      </Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const origin = process.env.BASE_URL ?? 'http://localhost:3000';

    const res = await fetch(`${origin}/api/blog`);
    const data = await res.json();

    return {
      props: {
        data,
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
