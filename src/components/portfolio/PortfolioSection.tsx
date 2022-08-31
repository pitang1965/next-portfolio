import React, { FC } from 'react';
import { Center, Container, Divider, Stack, Title } from '@mantine/core';
import { Portfolios } from './Portfolios';
import { LinkButton } from 'src/components/common/LinkButton';
import { AnchorSelf } from 'src/components/common/AnchorSelf';

import { PortfolioSchema } from './Portfolios';

type Props = {
  portfolios: PortfolioSchema[];
};

export const PortfolioSection: FC<Props> = ({ portfolios }) => {
  return (
    <Container sx={{ width: '100%' }}>
      <Stack>
        <Title order={2} align='left'>
          Portfolio
        </Title>
        <Divider mt='sm' />
        <Portfolios isHomePage portfolios={portfolios} />
        <Center>
          <AnchorSelf href='/portfolio'>
            <LinkButton>View All</LinkButton>
          </AnchorSelf>
        </Center>
      </Stack>
    </Container>
  );
};
