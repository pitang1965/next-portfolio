import React, { useState } from 'react';
import { GetStaticProps, NextPage } from 'next';
import { Layout } from 'src/components/layout/Layout';
import {
  Center,
  Container,
  Divider,
  Loader,
  Space,
  Text,
  Title,
} from '@mantine/core';
import { Blogs, BlogSchema } from 'src/components/blog/Blogs';
import { client } from 'src/pages/api/client';
import InfiniteScroll from 'react-infinite-scroll-component';
import { MAX_NUMBER_OF_BLOGS } from 'src/libs/constants';

type Props = {
  initialData: BlogSchema[];
};

const BlogPage: NextPage<Props> = ({ initialData }) => {
  const [data, setData] = useState(initialData);
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = async () => {
    const origin = process.env.BASE_URL ?? 'http://localhost:3000';
    const res = await fetch(`${origin}/api/blog`);
    const additionalData: Array<BlogSchema> = await res.json();

    if (MAX_NUMBER_OF_BLOGS <= data.length) {
      setHasMore(false);
    } else {
      setData((prevData) => prevData.concat(additionalData));
    }
  };

  return (
    <Layout content='Blog'>
      <Container>
        <Space h='md' />
        <Title order={2} align='left'>
          Blog
        </Title>
        <Divider mt='sm' />
        <InfiniteScroll
          dataLength={data.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={
            <Center>
              <Loader color='red' />
            </Center>
          }
          endMessage={
            <Center>
              <Text
                weight={700}
                color='blue'
              >{`${MAX_NUMBER_OF_BLOGS}件を全て表示しました。`}</Text>
            </Center>
          }
        >
          <Blogs blogs={data} isHomePage={false} />
        </InfiniteScroll>
      </Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await client.get({
      endpoint: 'blog',
      queries: { limit: MAX_NUMBER_OF_BLOGS },
    });

    return {
      props: {
        initialData: res.contents,
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
