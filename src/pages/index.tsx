import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import { Layout } from 'src/components/layout/Layout';
import { Container, Grid, Stack } from '@mantine/core';
import { TitleSection } from 'src/components/TitleSection';
import { BlogSection } from 'src/components/blog/BlogSection';
import { useAtom } from 'jotai';
import { isMobileUiAtom } from 'src/atoms/uiMode';
import { BlogSchema } from 'src/components/blog/Blogs';
import { PortfolioSchema } from 'src/components/portfolio/Portfolios';
import { client } from 'src/pages/api/client';
import {
  NUMBER_OF_PRE_REDNDERED_BLOGS,
  NUMBER_OF_PRE_REDNDERED_PORTFOLIOS,
} from 'src/libs/constants';

type Props = {
  blogs: BlogSchema[];
  portfolios: PortfolioSchema[];
};

const DynamicGitHubSection = dynamic(() =>
  import('src/components/github/GitHubSection').then((mod) => mod.GitHubSection)
);

const DynamicTwitterSection = dynamic(() =>
  import('src/components/twitter/TwitterSection').then(
    (mod) => mod.TwitterSection
  )
);

const DynamicPortfolioSection = dynamic(() =>
  import('src/components/portfolio/PortfolioSection').then(
    (mod) => mod.PortfolioSection
  )
);

const HomePage: NextPage<Props> = ({ blogs, portfolios }) => {
  const [isMobileUi] = useAtom(isMobileUiAtom);
  const gridSpan = isMobileUi ? 12 : 6;

  return (
    <Layout content='Home'>
      <Container>
        <Stack spacing='lg'>
          <TitleSection name='ピータン' />
          <BlogSection blogs={blogs} />
          <DynamicPortfolioSection portfolios={portfolios} />
          <Grid>
            <Grid.Col span={gridSpan}>
              <DynamicGitHubSection />
            </Grid.Col>
            <Grid.Col span={gridSpan}>
              <DynamicTwitterSection />
            </Grid.Col>
          </Grid>
        </Stack>
      </Container>{' '}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res_blog = await client.get({
      endpoint: 'blog',
      queries: { limit: NUMBER_OF_PRE_REDNDERED_BLOGS },
    });
    const res_portfolio = await client.get({
      endpoint: 'portfolio',
      queries: { limit: NUMBER_OF_PRE_REDNDERED_PORTFOLIOS },
    });

    return {
      props: {
        blogs: res_blog.contents,
        portfolios: res_portfolio.contents,
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
