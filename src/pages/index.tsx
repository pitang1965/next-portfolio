import React, { useEffect } from 'react';
import { GetStaticProps, NextPage } from 'next';
import { Layout } from 'src/components/layout/Layout';
import { Container, Grid, Stack } from '@mantine/core';
import { TitleSection } from 'src/components/TitleSection';
import { BlogSection } from 'src/components/blog/BlogSection';
import { PortfolioSection } from 'src/components/portfolio/PortfolioSection';
import { GitHubSection } from 'src/components/github/GitHubSection';
import { TwitterSection } from 'src/components/twitter/TwitterSection';

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

export const getStaticProps: GetStaticProps = async () => {
  try {
    const origin = process.env.BASE_URL ?? 'http://localhost:3000';
    const response = await fetch(`${origin}/api/getBlogs`);
    const data = await response.json();

    return {
      props: {
        blogData: data,
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

export default HomePage;
