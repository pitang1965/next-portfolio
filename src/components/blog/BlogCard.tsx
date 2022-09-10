import React, { FC } from 'react';
import {
  Paper,
  Stack,
  Text,
  Tooltip,
  TypographyStylesProvider,
} from '@mantine/core';
import { AnchorSelf } from 'src/components/common/AnchorSelf';
import { BlogSchema } from 'src/components/blog/Blogs';
import { removeTags } from 'src/utils/removeTags';
import { formatDate } from 'src/utils/formatDate';

type Props = {
  data: BlogSchema;
};

export const BlogCard: FC<Props> = (props) => {
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
      <AnchorSelf href={`/blog/${props.data.id}`}>
        <Tooltip label='詳細ページに飛ぶよ'>
          <Stack spacing='xs'>
            <Text size='lg' weight={700}>
              {props.data.title}
            </Text>

            <TypographyStylesProvider>
              <Text size='sm' weight={500} lineClamp={2}>
                {removeTags(props.data.content)}
              </Text>
            </TypographyStylesProvider>
            <Text size='xs' color='dimmed'>
              {formatDate(props.data.publishedAt, 'YYYY.MM.DD')}
            </Text>
          </Stack>
        </Tooltip>
      </AnchorSelf>
    </Paper>
  );
};
