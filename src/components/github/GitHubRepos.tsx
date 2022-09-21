import React from 'react';
import { Container, Stack } from '@mantine/core';
import { GitHubCard } from './GitHubCard';
import { useAtom } from 'jotai';
import { isMobileUiAtom } from 'src/atoms/uiMode';
import useSWR from 'swr';

const fetcher = (query: string) =>
  fetch('/api/github', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })
    .then((res) => res.json())
    .then((json) => json.data);

export const GitHubRepos = () => {
  const [isMobileUi] = useAtom(isMobileUiAtom);
  const numbersToShow = isMobileUi ? 3 : 5;

  const { data, error } = useSWR(
    `{
      repositories {
        name
        description
        languages {
          color
          name
          percentage
        }
        forkCount
        stargazerCount
        url
      }
    }
    `,
    fetcher
  );

  console.log(error, data);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const { repositories } = data;

  return (
    <Container fluid>
      <Stack spacing='xl'>
        {repositories?.slice(0, numbersToShow).map((repo: any) => (
          <GitHubCard data={repo} key={repo.id} />
        ))}
      </Stack>
    </Container>
  );
};
