import React, { FC } from 'react';
import { Progress } from '@mantine/core';
import { LanguageEdge, Maybe } from 'src/generated/graphql';

type Props = {
  languages: Maybe<Maybe<LanguageEdge>[]> | undefined;
  totalSize: number;
};

export const StuckedBarChart: FC<Props> = ({ languages, totalSize }) => {
  const sections = languages?.map((language) => {
    const percentage: number = Number(
      (((language ? language.size : 0) / totalSize) * 100.0).toFixed(1)
    );

    const section = {
      value: percentage,
      color: language?.node.color || 'red',
    };

    return section;
  });

  return <Progress size='md' sections={sections} />;
};
