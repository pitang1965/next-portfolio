import React, { FC } from 'react';
import styles from './Header.module.css';
import {
  ActionIcon,
  Burger,
  Container,
  Group,
  Header as MantineHeader,
  useMantineColorScheme,
  Text,
} from '@mantine/core';
import { AnchorSelf } from '../common/AnchorSelf';
import { IconSun, IconMoonStars } from '@tabler/icons';

import { useAtom } from 'jotai';
import { isMobileUiAtom } from 'src/atoms/uiMode';

type Props = {
  opened: boolean;
  toggleOpenState: () => void;
};

export const Header: FC<Props> = (props) => {
  const [isMobileUi] = useAtom(isMobileUiAtom);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <MantineHeader
      height={70}
      p='md'
      sx={(theme) => ({
        color: theme.colorScheme === 'dark' ? theme.black : theme.white,
        backgroundColor:
          theme.colorScheme === 'dark' ? theme.black : theme.white,
      })}
    >
      <Container>
        <Group position='apart'>
          {isMobileUi && (
            <Burger
              opened={props.opened}
              onClick={() => props.toggleOpenState()}
              size='sm'
              title='バーガーメニュー'
              mr='xl'
            />
          )}
          <AnchorSelf href='/'>
            <Text className={styles.title}>Pitang1965 Portfolio</Text>
          </AnchorSelf>
          <Group position='right' spacing='xs'>
            {!isMobileUi && (
              <div className={styles.menu}>
                <AnchorSelf href='/about'>About</AnchorSelf>
                <AnchorSelf href='/blog'>Blog</AnchorSelf>
                <AnchorSelf href='/portfolio'>Portfolio</AnchorSelf>
                <AnchorSelf href='/contact'>Contact</AnchorSelf>
              </div>
            )}
            <ActionIcon
              variant='outline'
              sx={{ borderColor: '#C1C2C5' }}
              onClick={() => toggleColorScheme()}
              title='ダークモードをトグル'
            >
              {dark ? (
                <IconSun size={18} color='yellow' />
              ) : (
                <IconMoonStars size={18} color='#25262B' />
              )}
            </ActionIcon>
          </Group>
        </Group>
      </Container>
    </MantineHeader>
  );
};
