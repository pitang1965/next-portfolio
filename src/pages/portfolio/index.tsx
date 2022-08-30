import React from 'react';
import type { GetStaticProps, NextPage } from 'next';
import { Layout } from 'src/components/layout/Layout';
import { Container, Divider, Space, Title } from '@mantine/core';
import {
  Portfolios,
  PortfolioDataType,
} from 'src/components/portfolio/Portfolios';
import { client } from 'src/pages/api/client';

type Props = {
  data: PortfolioDataType[];
};

const PortfolioPage: NextPage<Props> = ({ data }) => {
  return (
    <Layout content='Portfolio'>
      <Container>
        <Space h='md' />
        <Title order={2} align='left'>
          Portfolio
        </Title>
        <Divider mt='sm' />
        <Portfolios portfolioData={data} isHomePage={false} />
      </Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await client.get({
      endpoint: 'portfolio',
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

export default PortfolioPage;
