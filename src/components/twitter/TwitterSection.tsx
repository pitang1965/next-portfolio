import React from 'react';
import { Center, Container, Divider, Stack, Title } from '@mantine/core';
import { Tweets } from './Tweets';
import { LinkButton } from 'src/components/common/LinkButton';
import { twitterUrl } from 'data/urls';

const TwitterSection = () => {
  return (
    <Container>
      <Stack spacing='lg'>
        <Title order={2} align='left'>Twitter</Title>
        <Divider mt='sm' />
        <Tweets />
        <Center>
          <a href={twitterUrl}>
            <LinkButton>View on Twitter</LinkButton>
          </a>
        </Center>
      </Stack>
    </Container>
  );
};

export default TwitterSection;