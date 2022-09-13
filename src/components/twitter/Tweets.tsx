import React from 'react';
import { Center, Container, Stack, Text } from '@mantine/core';
import { TwitterCard } from './TwitterCard';
import { useTwitter } from 'src/hooks/useTwitter';
import { TweetDataSchema } from './TwitterCard';
const numbersToShow = 3;

const userImage =
  'https://pbs.twimg.com/profile_images/1473095887069097984/53rtMTuN_400x400.png';

export const Tweets = () => {
  const { tweets, userName, userScreenName, isLoading, isError } = useTwitter();

  if (isError) {
    return (
      <Container fluid>
        <Center>
          <Text>読み取りエラー</Text>
        </Center>
      </Container>
    );
  }
  if (isLoading) {
    return (
      <Container fluid>
        <Center>
          <Text>読み込み中...</Text>
        </Center>
      </Container>
    );
  }

  return (
    <Container fluid>
      <Stack spacing='xl'>
        {tweets?.slice(0, numbersToShow).map((tweet: TweetDataSchema) => (
          <TwitterCard
            userImage={userImage}
            userName={userName}
            userScreenName={userScreenName}
            data={tweet}
            key={tweet.id}
          />
        ))}
      </Stack>
    </Container>
  );
};
