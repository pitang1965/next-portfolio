import React from 'react';
import { Center, Container, Stack, Text } from '@mantine/core';
import { TwitterCard } from './TwitterCard';
import { useTwitter } from 'src/hooks/useTwitter';
import { TweetDataSchema } from './TwitterCard';
const numbersToShow = 3;

export const Tweets = () => {
  const {
    tweets,
    userName,
    profileImageUrl,
    userScreenName,
    isLoading,
    isError,
  } = useTwitter();

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
            profileImageUrl={profileImageUrl}
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
