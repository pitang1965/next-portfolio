import React, { FC } from 'react';
import { Group, Stack, Paper, Text } from '@mantine/core';
import { StarIcon } from '../icons/StarIcon';
import { GitForkIcon } from '../icons/GitForkIcon';
import { LanguageStatics } from './LanguageStatics';
import { Repository } from 'src/generated/graphql';
type Props = {
  repository: Repository;
};

export const GitHubCard: FC<Props> = ({ repository }) => {
  return (
    <Paper
      p='sm'
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === 'dark' ? theme.black : theme.white,
        '&:hover': {
          backgroundColor: theme.colorScheme === 'dark' ? '#222222' : '#EEEEEE',
        },
      })}
    >
      <a href={repository.url}>
        <Stack>
          <Text size='lg' weight={700}>
            {repository.name}
          </Text>
          <Text size='sm' weight={500} lineClamp={2}>
            {repository.description}
          </Text>
          <Group spacing='xs'>
            <StarIcon width={15} height={15} color='#909296' />
            <Text size='xs' color='dimmed'>
              {repository.stargazerCount}
            </Text>
            <GitForkIcon width={15} height={15} color='#909296' />
            <Text size='xs' color='dimmed'>
              {repository.forkCount}
            </Text>
          </Group>
          <LanguageStatics
            languages={repository.languages?.edges}
            totalSize={repository.languages?.totalSize}
          />
        </Stack>
      </a>
    </Paper>
  );
};
