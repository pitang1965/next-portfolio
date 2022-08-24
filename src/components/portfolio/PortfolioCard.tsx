/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react';
import Image from 'next/image';
import { Paper, Text } from '@mantine/core';
import { removeTags } from 'src/utils/removeTags';
import { PortfolioDataType } from 'src/atoms/portfolioData';
import { formatDate } from 'src/utils/formatDate';

type Props = {
  data: PortfolioDataType;
};

export const PortfolioCard: FC<Props> = (props) => {
  return (
    <Paper>
      <a href={props.data.siteUrl}>
        <Image
          src={props.data.imageUrl.url}
          alt={props.data.title}
          width={358}
          height={184}
        />
      </a>
      <Text size='lg' weight={700}>
        {props.data.title}
      </Text>
      <Text size='sm' weight={500} lineClamp={2}>
        {removeTags(props.data.description)}
      </Text>
      <Text size='xs' color='dimmed'>
        {`${formatDate(props.data.dateFrom, 'YYYY.MM')} - ${formatDate(
          props.data.dateTo,
          'YYYY.MM'
        )}`}
      </Text>
    </Paper>
  );
};
