import React, { FC } from 'react';
import { Center, Container, Divider, Stack, Title } from '@mantine/core';
import { LinkButton } from 'src/components/common/LinkButton';
import { Blogs } from './Blogs';
import { AnchorSelf } from 'src/components/common/AnchorSelf';
import { BlogDataType } from './Blogs';

type Props = {
  blogData: BlogDataType[];
};

export const BlogSection: FC<Props> = ({blogData}) => {
  return (
    <Container sx={{ width: '100%' }}>
      <Stack spacing='lg'>
        <Title order={2} align='left'>
          Blog
        </Title>
        <Divider mt='sm' />
        <Blogs isHomePage blogData={blogData} />
        <Center>
          <AnchorSelf href='/blog'>
            <LinkButton>View All</LinkButton>
          </AnchorSelf>
        </Center>
      </Stack>
    </Container>
  );
};
