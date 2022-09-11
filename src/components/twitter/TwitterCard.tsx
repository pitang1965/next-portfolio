import React, { FC } from 'react';
import styles from './TwitterCard.module.css';
import { Avatar, createStyles, Group, Paper, Stack, Text } from '@mantine/core';
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

const useStyles = createStyles((theme, _params, _getRef) => ({
  backgroundColor: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.black : theme.white,
    '&:hover, &:hover *': {
      backgroundColor: theme.colorScheme === 'dark' ? '#222222' : '#EEEEEE',
    },
  },
}));

export const TwitterCard: FC<Props> = (props) => {
  const tweetUrl = `https://twitter.com/${props.userName}/status/${props.data.id}`;
  const { classes } = useStyles();

  return (
    <Paper p='sm' className={classes.backgroundColor}>
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
            <Text size='sm' weight={700} className={classes.backgroundColor}>
              {props.userScreenName}
            </Text>
            <a href={`https://twitter.com/${props.userName}`}>
              <Text
                size='xs'
                color='dimmed'
                className={classes.backgroundColor}
              >{`@${props.userName}`}</Text>
            </a>
            <Text size='xs' color='dimmed'>
              ・
            </Text>
            <a href={tweetUrl}>
              <Text
                size='xs'
                color='dimmed'
                className={classes.backgroundColor}
              >
                {formatDate(props.data.created_at, 'SNS')}
              </Text>
            </a>
          </div>
          <a href={tweetUrl}>
            <Text size='sm' weight={500} className={classes.backgroundColor}>
              {props.data.text}
            </Text>
          </a>
        </Stack>
      </Group>
    </Paper>
  );
};
