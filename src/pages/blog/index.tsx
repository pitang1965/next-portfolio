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
import {
  MAX_NUMBER_OF_BLOGS,
  NUMBER_OF_PRE_RENDERED_BLOGS,
} from 'src/libs/constants';
import { assertIsDefined } from 'src/utils/assert';
import { useBlogTotalCount } from 'src/hooks/useBlogTotalCount';

type Props = {
  initialData: BlogSchema[];
};

const BlogPage: NextPage<Props> = ({ initialData }) => {
  const [data, setData] = useState(initialData);
  const [hasMore, setHasMore] = useState(true);
  const { blogTotalCount, isLoading, isError } = useBlogTotalCount();

  const fetchMoreData = async () => {
    if (!hasMore) return;

    const origin = process.env.NEXT_PUBLIC_BASE_URL;
    assertIsDefined(origin);
    const res = await fetch(
      `${origin}/api/blog?offset=${data.length.toString()}`
    );
    const additionalData: Array<BlogSchema> = await res.json();

    if (MAX_NUMBER_OF_BLOGS <= data.length || blogTotalCount <= data.length) {
      setHasMore(false);
    } else {
      setData((prevData) => prevData.concat(additionalData));
    }
  };

  if (isLoading)
  return (
    <Container>
      <Center>
        <Text>ブログ総数の読み取り中...</Text>
      </Center>
    </Container>
  );

  if (isError)
    return (
      <Container>
        <Center>
          <Text>ブログ総数の読み取り失敗。</Text>
        </Center>
      </Container>
    );

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
              <Text weight={700} color='blue'>{`${Math.min(
                MAX_NUMBER_OF_BLOGS,
                blogTotalCount
              )}件を全て表示しました。`}</Text>
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
      queries: { limit: NUMBER_OF_PRE_RENDERED_BLOGS },
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
