import React, { FC } from 'react';
import { Progress } from '@mantine/core';

import type { LanguageStaticsType } from '../github/LanguageStatics';

type Props = {
  languages: LanguageStaticsType[];
};

export const StuckedBarChart: FC<Props> = (props) => {
  const sections = props.languages.map((language) => ({
    value: language.percentage,
    color: language.color,
  }));

  return <Progress size='md' sections={sections} />;
};
