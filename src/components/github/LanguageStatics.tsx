import React, { FC } from 'react';
import { ColorSwatch, Group, Stack, Text } from '@mantine/core';
import { StuckedBarChart } from '../common/StuckedBarChart';
import { LanguageEdge, Maybe } from 'src/generated/graphql';

type Props = {
  languages: Maybe<Maybe<LanguageEdge>[]> | undefined;
  totalSize: number | undefined;
};

export const LanguageStatics: FC<Props> = ({ languages, totalSize }) => {
  if (languages === undefined || totalSize === undefined) return null;

  const calcPercent = (language: Maybe<LanguageEdge>, totalSize: number) => {
    if (language === null) return 0;
    return ((Number(language.size) / Number(totalSize)) * 100.0).toFixed(1);
  };

  return (
    <Stack>
      <StuckedBarChart languages={languages} totalSize={totalSize} />
      <Group>
        {languages?.map((language) => (
          <Group key={language?.node.name} spacing='xs'>
            <ColorSwatch color={language?.node.color || 'red'} size={6} />
            <Text size='xs' weight={700}>
              {language?.node.name}
            </Text>
            <Text size='xs' weight={700} color='dimmed'>{`${calcPercent(
              language,
              totalSize
            )}%`}</Text>
          </Group>
        ))}
      </Group>
    </Stack>
  );
};
