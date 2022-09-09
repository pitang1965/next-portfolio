import React from 'react';
import { Center, Footer as MantineFooter, Text } from '@mantine/core';

export const Footer = () => {
  return (
    <MantineFooter
      height={60}
      p='md'
      sx={(theme) => ({
        color: theme.colorScheme === 'dark' ? theme.black : theme.white,
        backgroundColor:
          theme.colorScheme === 'dark' ? theme.black : theme.white,
      })}
    >
      <Center>
        <Text
          variant='link'
          component='a'
          href='https://www.youtube.com/c/shimabu_it/'
          color='dimmed'
        >
          &copy; 2022 Shimabu IT University
        </Text>
      </Center>
    </MantineFooter>
  );
};
