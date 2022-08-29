import React from 'react';
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
import { BlogDataType } from 'src/components/blog/Blogs';
import { PortfolioDataType } from 'src/components/portfolio/Portfolios';

type Props = {
  blogData: BlogDataType[];
  portfolioData: PortfolioDataType[];
};

const HomePage: NextPage<Props> = ({ blogData, portfolioData }) => {
  const [isMobileUi] = useAtom(isMobileUiAtom);
  const gridSpan = isMobileUi ? 12 : 6;

  return (
    <Layout content='Home'>
      <Container>
        <Stack spacing='lg'>
          <TitleSection name='ピータン' />
          <BlogSection blogData={blogData} />
          <PortfolioSection portfolioData={portfolioData}/>
          <Grid>
            <Grid.Col span={gridSpan}>
              <GitHubSection />
            </Grid.Col>
            <Grid.Col span={gridSpan}>
              <TwitterSection />
            </Grid.Col>
          </Grid>
        </Stack>
      </Container>{' '}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const origin = process.env.BASE_URL ?? 'http://localhost:3000';

    const res_blog = await fetch(`${origin}/api/blog`);
    const blogData = await res_blog.json();

    const res_portfolio = await fetch(`${origin}/api/portfolio`);
    const portfolioData = await res_portfolio.json();

    return {
      props: {
        blogData,
        portfolioData,
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
