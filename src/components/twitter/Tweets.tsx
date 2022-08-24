import React from 'react';
import { Container, Stack } from '@mantine/core';
import { tweetData } from 'data/twitterData';
import { TwitterCard } from './TwitterCard';

const numbersToShow = 3;

export const Tweets = () => {
  return (
    <Container fluid>
      <Stack spacing='xl'>
        {tweetData?.slice(0, numbersToShow).map((tweet, index) => (
          <TwitterCard data={tweet} key={index} index={index} />
        ))}
      </Stack>
    </Container>
  );
};
