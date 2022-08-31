import React, { FC } from 'react';
import styles from './TwitterCard.module.css';
import { Avatar, Card, Group, Stack, Text } from '@mantine/core';

type Props = {
  data: Schema;
  index: number;
};

type Schema = {
  userImage: string;
  userName: string;
  userScreenName: string;
  date: string;
  tweet: string;
};

export const TwitterCard: FC<Props> = (props) => {
  return (
    <Card>
      <Group noWrap align='flex-start'>
        <Avatar
          radius='xl'
          src={props.data.userImage}
          alt={props.data.userScreenName}
        />
        <Stack>
          <div className={styles.header}>
            <Text size='sm' weight={700}>
              {props.data.userScreenName}
            </Text>
            <Text
              size='xs'
              color='dimmed'
            >{`${props.data.userName}・${props.data.date}`}</Text>
          </div>
          <Text size='sm' weight={500}>
            {props.data.tweet}
          </Text>
        </Stack>
      </Group>
    </Card>
  );
};
