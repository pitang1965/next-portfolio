import React, { FC } from 'react';
import { Progress } from '@mantine/core';
import { Language } from 'src/generated/graphql';

type Props = {
  languages: Array<Language>;
};

export const StuckedBarChart: FC<Props> = (props) => {
  const sections = props.languages?.map((language) => ({
    value: language.percentage,
    color: language.color,
  }));

  return <Progress size='md' sections={sections} />;
};
