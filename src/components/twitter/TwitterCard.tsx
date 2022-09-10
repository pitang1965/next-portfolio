import React, { FC } from 'react';
import styles from './TwitterCard.module.css';
import { Avatar, Group, Paper, Stack, Text } from '@mantine/core';
import { formatDate } from 'src/utils/formatDate';

type Props = {
  userImage: string;
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
  const tweetUrl =`https://twitter.com/${props.userName}/status/${props.data.id}`;
  
  return (
    <Paper
      p='sm'
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === 'dark' ? theme.black : theme.white,
      })}
    >
      <Group noWrap align='flex-start'>
        <a href={`https://twitter.com/${props.userName}`}>
          <Avatar
            radius='xl'
            src={props.userImage}
            alt={props.userScreenName}
          />
        </a>
        <Stack spacing='xs'>
          <div className={styles.header}>
            <Text size='sm' weight={700}>
              {props.userScreenName}
            </Text>
            <a href={`https://twitter.com/${props.userName}`}>
              <Text size='xs' color='dimmed'>{`@${props.userName}`}</Text>
            </a>
            <Text size='xs' color='dimmed'>
              ・
            </Text>
            <a href={tweetUrl}>
              <Text size='xs' color='dimmed'>
                {formatDate(props.data.created_at, 'SNS')}
              </Text>
            </a>
          </div>
          <a href={tweetUrl}>
            <Text size='sm' weight={500}>
              {props.data.text}
            </Text>
          </a>
        </Stack>
      </Group>
    </Paper>
  );
};
