/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react';
import Image from "next/image";
import { Paper, Stack, Text, Tooltip } from '@mantine/core';
import { AnchorSelf } from 'src/components/common/AnchorSelf';
import { PortfolioSchema } from './Portfolios';
import { removeTags } from 'src/utils/removeTags';
import { formatDate } from 'src/utils/formatDate';

type Props = {
  data: PortfolioSchema;
};

export const PortfolioCard: FC<Props> = (props) => {
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
      <Tooltip label='サイトに飛ぶよ'>
        <Stack>
          <a href={props.data.siteUrl}>
            <Image
              src={props.data.imageUrl.url}
              alt={props.data.title}
              width={358}
              height={184}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover"
              }} />
          </a>
        </Stack>
      </Tooltip>
      <AnchorSelf href={`/portfolio/${props.data.id}`}>
        <Tooltip label='詳細ページに飛ぶよ'>
          <Stack spacing='xs'>
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
          </Stack>
        </Tooltip>
      </AnchorSelf>
    </Paper>
  );
};
