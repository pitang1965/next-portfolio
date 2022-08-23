import React, { useEffect } from 'react';
import { GetStaticProps, NextPage } from 'next';
import { Layout } from 'src/components/layout/Layout';
import { Container, Grid, Stack } from '@mantine/core';
import { TitleSection } from 'src/components/TitleSection';
import { BlogSection } from 'src/components/blog/BlogSection';
import { PortfolioSection } from 'src/components/portfolio/PortfolioSection';
import { GitHubSection } from 'src/components/github/GitHubSection';
import { TwitterSection } from 'src/components/twitter/TwitterSection';

import { client } from 'src/lib/client';
import { useAtom } from 'jotai';
import { isMobileUiAtom } from 'src/atoms/uiMode';
import { blogDataAtom, BlogDataType } from 'src/atoms/blogData';

const HomePage: NextPage<{ blogData: BlogDataType[] }> = ({ blogData }) => {
  const [isMobileUi] = useAtom(isMobileUiAtom);
  const gridSpan = isMobileUi ? 12 : 6;

  const [_, setBlogData] = useAtom(blogDataAtom);

  useEffect(() => {
    setBlogData(blogData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout content='Home'>
      <Container>
        <Stack spacing='lg'>
          <TitleSection name='ピータン' />
          <BlogSection />
          <PortfolioSection />
          <Grid>
            <Grid.Col span={gridSpan}>
              <GitHubSection />
            </Grid.Col>
            <Grid.Col span={gridSpan}>
              <TwitterSection />
            </Grid.Col>
          </Grid>
        </Stack>
      </Container>
    </Layout>
  );
};

const minifiyData = (data: Array<BlogDataType>): Array<BlogDataType> =>
  data.map((datum) => {
    const newObj: BlogDataType = {
      id: datum.id,
      title: datum.title,
      content: datum.content,
      createdAt: datum.createdAt,
    };

    return newObj;
  });

export const getStaticProps: GetStaticProps = async () => {
  const res = await client.get({ endpoint: 'blog' });
  const minifiedData = minifiyData(res.contents);

  return {
    props: {
      blogData: minifiedData,
    },
  };
};

export default HomePage;
