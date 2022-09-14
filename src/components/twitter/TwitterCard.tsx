import React, { FC } from 'react';
import styles from './TwitterCard.module.css';
import { Avatar, Group, Paper, Stack, Text } from '@mantine/core';
import { formatDate } from 'src/utils/formatDate';

type Props = {
  profileImageUrl: string;
  userName: string;
  userScreenName: string;
  data: TweetDataSchema;
};

export type TweetDataSchema = {
  author_id: string;
  created_at: string;
  text: string;
  id: string;
};

export const TwitterCard: FC<Props> = (props) => {
  const tweetUrl = `https://twitter.com/${props.userName}/status/${props.data.id}`;

  return (
    <a href={tweetUrl}>
      <Paper
        p='sm'
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.black : theme.white,
          '&:hover': {
            backgroundColor:
              theme.colorScheme === 'dark' ? '#222222' : '#EEEEEE',
          },
        })}
      >
        <Group noWrap align='flex-start'>
          <Avatar
            radius='xl'
            src={props.profileImageUrl}
            alt={props.userScreenName}
          />
          <Stack spacing='xs'>
            <div className={styles.header}>
              <Text size='sm' weight={700}>
                {props.userScreenName}
              </Text>
              <Text size='xs'>{`@${props.userName}`}</Text>
              <Text size='xs' color='dimmed'>
                ・
              </Text>
              <Text size='xs' color='dimmed'>
                {formatDate(props.data.created_at, 'SNS')}
              </Text>
            </div>
            <Text size='sm' weight={500}>
              {props.data.text}
            </Text>
          </Stack>
        </Group>
      </Paper>
    </a>
  );
};
