import React, { lazy } from 'react';
import { GetStaticProps, NextPage } from 'next';
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
import { getGitHubData } from 'src/libs/getGithubData';
import { Repository } from 'src/generated/graphql';

type Props = {
  blogs: BlogSchema[];
  portfolios: PortfolioSchema[];
  githubs: Repository[];
};

const GitHubSection = lazy(() => import('src/components/github/GitHubSection'));

const TwitterSection = lazy(
  () => import('src/components/twitter/TwitterSection')
);

const PortfolioSection = lazy(
  () => import('src/components/portfolio/PortfolioSection')
);

const HomePage: NextPage<Props> = ({ blogs, portfolios, githubs }) => {
  const [isMobileUi] = useAtom(isMobileUiAtom);
  const gridSpan = isMobileUi ? 12 : 6;

  return (
    <Layout content='Home'>
      <Container>
        <Stack spacing='lg'>
          <TitleSection name='ピータン' />
          <BlogSection blogs={blogs} />
          <PortfolioSection portfolios={portfolios} />
          <Grid>
            <Grid.Col span={gridSpan}>
              <GitHubSection githubs={githubs} />
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
    const res_blog = await client.get({
      endpoint: 'blog',
      queries: { limit: NUMBER_OF_PRE_REDNDERED_BLOGS },
    });
    const res_portfolio = await client.get({
      endpoint: 'portfolio',
      queries: { limit: NUMBER_OF_PRE_REDNDERED_PORTFOLIOS },
    });
    const res_github = await getGitHubData();

    return {
      props: {
        blogs: res_blog.contents,
        portfolios: res_portfolio.contents,
        githubs: res_github,
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
