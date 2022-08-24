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
import { portfolioDataAtom, PortfolioDataType } from 'src/atoms/portfolioData';

const HomePage: NextPage<{
  blogData: BlogDataType[];
  portfolioData: PortfolioDataType[];
}> = ({ blogData, portfolioData }) => {
  const [isMobileUi] = useAtom(isMobileUiAtom);
  const gridSpan = isMobileUi ? 12 : 6;

  const [_, setBlogData] = useAtom(blogDataAtom);
  const [__, setPortfolioData] = useAtom(portfolioDataAtom);

  useEffect(() => {
    setBlogData(blogData);
    setPortfolioData(portfolioData);
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

    const res_blog = await fetch(`${origin}/api/getBlogs`);
    const blogData = await res_blog.json();

    const res_portfolio = await fetch(`${origin}/api/getPortfolios`);
    const portfolioData = await res_portfolio.json();

    return {
      props: {
        blogData: blogData,
        portfolioData: portfolioData,
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
