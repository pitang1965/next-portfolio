import React, { FC } from 'react';
import { Group, Stack, Paper, Text } from '@mantine/core';
import { StarIcon } from '../icons/StarIcon';
import { GitForkIcon } from '../icons/GitForkIcon';
import type { LanguageStaticsType } from './LanguageStatics';
import { LanguageStatics } from './LanguageStatics';

type Props = {
  data: Schema;
};

type Schema = {
  id: string;
  url: string;
  name: string;
  description: string;
  stars: number;
  forks: number;
  languages: LanguageStaticsType[];
};

export const GitHubCard: FC<Props> = (props) => {
  return (
    <Paper
      p='sm'
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === 'dark' ? theme.black : theme.white,
      })}
    >
      <a href={props.data.url}>
        <Stack>
          <Text size='lg' weight={700}>
            {props.data.name}
          </Text>
          <Text size='sm' weight={500} lineClamp={2}>
            {props.data.description}
          </Text>
          <Group spacing='xs'>
            <StarIcon width={15} height={15} color='#909296' />
            <Text size='xs' color='dimmed'>
              {props.data.stars}
            </Text>
            <GitForkIcon width={15} height={15} color='#909296' />
            <Text size='xs' color='dimmed'>
              {props.data.forks}
            </Text>
          </Group>
          <LanguageStatics languages={props.data.languages} />
        </Stack>
      </a>
    </Paper>
  );
};
