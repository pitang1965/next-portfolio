import React, { FC } from 'react';
import styles from './TwitterCard.module.css';
import { Avatar, Card, Group, Stack, Text } from '@mantine/core';

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
  return (
    <Card>
      <Group noWrap align='flex-start'>
        <Avatar
          radius='xl'
          src={props.userImage}
          alt={props.userScreenName}
        />
        <Stack>
          <div className={styles.header}>
            <Text size='sm' weight={700}>
              {props.userScreenName}
            </Text>
            <Text
              size='xs'
              color='dimmed'
            >{`@${props.userName}・${props.data.created_at}`}</Text>
          </div>
          <Text size='sm' weight={500}>
            {props.data.text}
          </Text>
        </Stack>
      </Group>
    </Card>
  );
};
