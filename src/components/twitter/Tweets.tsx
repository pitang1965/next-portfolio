import React from 'react';
import { Center, Container, Stack, Text } from '@mantine/core';
import { TwitterCard } from './TwitterCard';
import useSWR from 'swr';
import { TweetDataSchema } from './TwitterCard';
const numbersToShow = 3;

const userImage =
  'https://pbs.twimg.com/profile_images/1473095887069097984/53rtMTuN_400x400.png';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const Tweets = () => {
  const { data, error } = useSWR('/api/twitter', fetcher);

  if (error) {
    return (
      <Container fluid>
        <Center>
          <Text>読み取りエラー</Text>
        </Center>
      </Container>
    );
  }
  if (!data) {
    return (
      <Container fluid>
        <Center>
          <Text>読み込み中...</Text>
        </Center>
      </Container>
    );
  }

  console.log(data);

  return (
    <Container fluid>
      <Stack spacing='xl'>
        {data.data?.slice(0, numbersToShow).map((tweet: TweetDataSchema) => (
          <TwitterCard
            userImage={userImage}
            userName={data.includes.users[0].username}
            userScreenName={data.includes.users[0].name}
            data={tweet}
            key={tweet.id}
          />
        ))}
      </Stack>
    </Container>
  );
};
