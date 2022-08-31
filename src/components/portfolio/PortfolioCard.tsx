/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react';
import Image from 'next/image';
import { Paper, Text, Tooltip } from '@mantine/core';
import { AnchorSelf } from 'src/components/common/AnchorSelf';
import { PortfolioSchema } from './Portfolios';
import { removeTags } from 'src/utils/removeTags';
import { formatDate } from 'src/utils/formatDate';

type Props = {
  data: PortfolioSchema;
};

export const PortfolioCard: FC<Props> = (props) => {
  return (
    <Paper>
      <Tooltip label='サイトに飛ぶよ'>
        <a href={props.data.siteUrl}>
          <Image
            src={props.data.imageUrl.url}
            alt={props.data.title}
            width={358}
            height={184}
          />
        </a>
      </Tooltip>
      <AnchorSelf href={`/portfolio/${props.data.id}`}>
        <Tooltip label='詳細ページに飛ぶよ'>
          <Text size='lg' weight={700}>
            {props.data.title}
          </Text>
        </Tooltip>
      </AnchorSelf>
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
