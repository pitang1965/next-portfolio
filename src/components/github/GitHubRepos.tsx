import React from 'react';
import { Container, Stack } from '@mantine/core';
import { githubRepos } from 'data/githubs';
import { GitHubCard } from './GitHubCard';

import { useAtom } from 'jotai';
import { isMobileUiAtom } from 'src/atoms/uiMode';

export const GitHubRepos = () => {
  const [isMobileUi] = useAtom(isMobileUiAtom);
  const numbersToShow = isMobileUi ? 3 : 5;

  return (
    <Container fluid>
      <Stack spacing='xl'>
        {githubRepos?.slice(0, numbersToShow).map((repo) => (
          <GitHubCard data={repo} key={repo.id} />
        ))}
      </Stack>
    </Container>
  );
};
