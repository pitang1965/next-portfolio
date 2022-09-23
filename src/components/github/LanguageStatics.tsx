import React, { FC } from 'react';
import { ColorSwatch, Group, Stack, Text } from '@mantine/core';
import { StuckedBarChart } from '../common/StuckedBarChart';
import { Language } from 'src/generated/graphql';

type Props = {
  languages: Array<Language>;
};

export const LanguageStatics: FC<Props> = (props) => {
  return (
    <Stack>
      <StuckedBarChart languages={props.languages} />
      <Group>
        {props.languages?.map((language) => (
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
