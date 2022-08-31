import React, { FC } from 'react';
import { Paper, Text, Tooltip, TypographyStylesProvider } from '@mantine/core';
import { AnchorSelf } from 'src/components/common/AnchorSelf';
import { BlogSchema } from 'src/components/blog/Blogs';
import { removeTags } from 'src/utils/removeTags';
import { formatDate } from 'src/utils/formatDate';

type Props = {
  data: BlogSchema;
};

export const BlogCard: FC<Props> = (props) => {
  return (
    <Paper>
      <AnchorSelf href={`/blog/${props.data.id}`}>
        <Tooltip label='詳細ページに飛ぶよ'>
          <Text size='lg' weight={700}>
            {props.data.title}
          </Text>
        </Tooltip>
      </AnchorSelf>
      <TypographyStylesProvider>
        <Text size='sm' weight={500} lineClamp={2}>
          {removeTags(props.data.content)}
        </Text>
      </TypographyStylesProvider>
      <Text size='xs' color='dimmed'>
        {formatDate(props.data.publishedAt, 'YYYY.MM.DD')}
      </Text>
    </Paper>
  );
};
