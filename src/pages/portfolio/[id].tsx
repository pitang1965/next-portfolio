import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Layout } from 'src/components/layout/Layout';
import {
  Center,
  Container,
  Divider,
  Space,
  Text,
  Title,
  Tooltip,
  TypographyStylesProvider,
} from '@mantine/core';
import { formatDate } from 'src/utils/formatDate';
import { PortfolioSchema } from 'src/components/portfolio/Portfolios';
import { client } from 'src/pages/api/client';
import { NUMBER_OF_PRE_REDNDERED_PORTFOLIOS } from 'src/libs/constants';

type Props = {
  data: PortfolioSchema;
};

const PortfolioDetailPage: NextPage<Props> = ({ data }) => {
  const router = useRouter();
  const { id } = router.query;

  if (typeof id !== 'string' || data === undefined) {
    return (
      <Layout content='Portfolio'>
        <Container>
          <Center>
            <Text>データが取得できませんでした。</Text>
          </Center>
        </Container>
      </Layout>
    );
  }

  if (router.isFallback) {
    return <Text>Loading...</Text>;
  }

  return (
    <Layout content='Portfolio'>
      <Container>
        <Space h='md' />
        <Title order={2} align='left'>
          {data.title}
        </Title>
        <Divider mt='sm' />
        <Text size='xs' color='dimmed'>
          {`${formatDate(data.dateFrom, 'YYYY.MM')} - ${formatDate(
            data.dateTo,
            'YYYY.MM'
          )}`}
        </Text>
        <Tooltip label='サイトに飛ぶよ'>
          <a href={data.siteUrl}>
            <Image
              src={data.imageUrl.url}
              alt={data.title}
              layout='responsive'
              width={data.imageUrl.width}
              height={data.imageUrl.height}
            />
          </a>
        </Tooltip>
        <TypographyStylesProvider>
          <Text size='sm' weight={500}>
            <div dangerouslySetInnerHTML={{ __html: data.description }} />
          </Text>
        </TypographyStylesProvider>
      </Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await client.get({
    endpoint: 'portfolio',
    queries: { limit: NUMBER_OF_PRE_REDNDERED_PORTFOLIOS },
  });
  const paths = res.contents.map(
    (portfolio: PortfolioSchema) => `/portfolio/${portfolio.id}`
  );

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const id = context.params?.id;
    const res = await client.get({
      endpoint: 'portfolio',
      contentId: id as string,
      queries: { limit: 1 },
    });

    return {
      props: {
        data: res,
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

export default PortfolioDetailPage;
