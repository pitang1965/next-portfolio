import React, { FC } from 'react';
import { Center, Container, Divider, Stack, Title } from '@mantine/core';
import { LinkButton } from 'src/components/common/LinkButton';
import { Blogs } from './Blogs';
import { AnchorSelf } from 'src/components/common/AnchorSelf';
import { BlogSchema } from './Blogs';

type Props = {
  blogs: BlogSchema[];
};

export const BlogSection: FC<Props> = ({ blogs }) => {
  return (
    <Container sx={{ width: '100%' }}>
      <Stack spacing='lg'>
        <Title order={2} align='left'>
          Blog
        </Title>
        <Divider mt='sm' />
        <Blogs isHomePage blogs={blogs} />
        <Center>
          <AnchorSelf href='/blog'>
            <LinkButton>View All</LinkButton>
          </AnchorSelf>
        </Center>
      </Stack>
    </Container>
  );
};
