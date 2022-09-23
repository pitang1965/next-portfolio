import React, { FC } from 'react';
import { Progress } from '@mantine/core';
import { Language, Maybe } from 'src/generated/graphql';

type Props = {
  languages: Maybe<Array<Language>>|undefined;
};

export const StuckedBarChart: FC<Props> = (props) => {
  const sections = props.languages?.map((language) => ({
    value: language.percentage,
    color: language.color,
  }));

  return <Progress size='md' sections={sections} />;
};
