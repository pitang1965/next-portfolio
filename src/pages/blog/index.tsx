import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import { Layout } from 'src/components/layout/Layout';
import { Container, Divider, Space, Title } from '@mantine/core';
import { Blogs, BlogSchema } from 'src/components/blog/Blogs';
import { client } from 'src/pages/api/client';

type Props = {
  data: BlogSchema[];
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
        <Blogs blogs={data} isHomePage={false} />
        {/* <Center>
          <Loader color='red' />
        </Center> */}
      </Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await client.get({
      endpoint: 'blog',
      queries: { limit: 10000 },
    });

    return {
      props: {
        data: res.contents,
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
