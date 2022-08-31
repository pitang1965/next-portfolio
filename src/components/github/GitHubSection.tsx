import React from 'react';
import { Center, Container, Divider, Stack, Title } from '@mantine/core';
import { LinkButton } from 'src/components/common/LinkButton';
import { GitHubRepos } from './GitHubRepos';
import { githubUrl } from 'data/urls';

export const GitHubSection = () => {
  return (
    <Container>
      <Stack spacing='lg'>
        <Title order={2} align='left'>GitHub</Title>
        <Divider mt='sm' />
        <GitHubRepos />
        <Center>
          <a href={githubUrl}>
            <LinkButton>View on GitHub</LinkButton>
          </a>
        </Center>
      </Stack>
    </Container>
  );
};
