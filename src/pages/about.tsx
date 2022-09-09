import React from 'react';
import type { NextPage } from 'next';
import { Layout } from 'src/components/layout/Layout';
import Head from 'next/head';
import { Container, Divider, Space, Stack, Text, Title } from '@mantine/core';

const About: NextPage = () => {
  return (
    <Layout content='About'>
      <Container>
        <Head>
          <title>About - Next Portfolio</title>
          <meta name='description' content='Pitang1965 Portfolio' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Space h='md' />
        <Stack>
          <Title order={2}>About</Title>
          <Divider mt='sm' />
          <Text>pitang1965</Text>
          <Text>
            東京都いなか市在住の50代男性。
            個人開発のためWeb技術を2019年から独学を継続（今はTypeScript/React/Supabaseが中心）。
            昔19年ほどC/C++で開発・保守。
            医療機器の品証も長くやりましたが、この8月から退職前の有給休暇に入ります。
            お気軽にフォロー願います🤲
          </Text>
        </Stack>
      </Container>
    </Layout>
  );
};

export default About;
