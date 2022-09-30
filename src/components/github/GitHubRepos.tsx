import React, { FC } from 'react';
import { Container, Stack } from '@mantine/core';
import { GitHubCard } from './GitHubCard';
import { useAtom } from 'jotai';
import { isMobileUiAtom } from 'src/atoms/uiMode';
import { Repository } from 'src/generated/graphql';

type Props = {
  githubs: Repository[];
};

export const GitHubRepos: FC<Props> = ({ githubs }) => {
  const [isMobileUi] = useAtom(isMobileUiAtom);
  const numbersToShow = isMobileUi ? 3 : 5;

  return (
    <Container fluid>
      <Stack spacing='xl'>
        {githubs?.slice(0, numbersToShow).map((repo) => (
          <GitHubCard repository={repo} key={repo.id} />
        ))}
      </Stack>
    </Container>
  );
};
