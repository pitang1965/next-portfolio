import React, { FC } from 'react';
import { ColorSwatch, Group, Stack, Text } from '@mantine/core';
import { StuckedBarChart } from './StuckedBarChart';

export type LanguageData = {
  name: string;
  color: string;
  percentage: number;
};

type Props = {
  languages: LanguageData[];
};

export const LanguageInfo: FC<Props> = (props) => {
  return (
    <Stack>
      <StuckedBarChart languages={props.languages} />
      <Group>
        {props.languages.map((language) => (
          <Group key={language.name} spacing='xs'>
            <ColorSwatch color={language.color} size={6} />
            <Text size='xs' weight={700}>
              {language.name}
            </Text>
            <Text
              size='xs'
              weight={700}
              color='dimmed'
            >{`${language.percentage}%`}</Text>
          </Group>
        ))}
      </Group>
    </Stack>
  );
};
