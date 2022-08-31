import React from 'react';
import { ActionIcon, Group, Tooltip } from '@mantine/core';
import { TwitterIcon } from '../icons/TwitterIcon';
import { FacebookIcon } from '../icons/FacebookIcon';
import { RssIcon } from '../icons/RssIcon';
import { twitterUrl } from 'data/urls';

export const SnsIconGroup = () => {
  return (
    <Group position='left' spacing='xs'>
      <ActionIcon variant='transparent' component='a' href={twitterUrl}>
        <TwitterIcon />
      </ActionIcon>
      <Tooltip label='秘密だよ'>
        <ActionIcon variant='transparent' color='yellow'>
          <FacebookIcon />
        </ActionIcon>
      </Tooltip>
      <Tooltip label='未実装だよ'>
        <ActionIcon variant='transparent' color='yellow'>
          <RssIcon />
        </ActionIcon>
      </Tooltip>
    </Group>
  );
};
