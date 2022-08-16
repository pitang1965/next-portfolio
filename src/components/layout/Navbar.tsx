import React, { FC } from 'react';
import styles from './Navbar.module.css';
import { Navbar as MantineNavbar } from '@mantine/core';
import { AnchorSelf } from 'src/components/common/AnchorSelf';

import { useAtom } from 'jotai';
import { isMobileUiAtom } from 'src/atoms/uiMode';

type Props = {
  opened: boolean;
};

export const Navbar: FC<Props> = (props) => {
  const [isMobileUi] = useAtom(isMobileUiAtom);

  return isMobileUi ? (
    <MantineNavbar
      p='md'
      hiddenBreakpoint='sm'
      hidden={!props.opened}
      width={{ sm: 200, lg: 300 }}
      className={styles.navbar}
    >
      <MantineNavbar.Section mt='md'>
        <AnchorSelf href='about' color='white'>
          About
        </AnchorSelf>
      </MantineNavbar.Section>
      <MantineNavbar.Section>
        <AnchorSelf href='blog' color='white'>
          Blog
        </AnchorSelf>
      </MantineNavbar.Section>
      <MantineNavbar.Section>
        <AnchorSelf href='portfolio' color='white'>
          Portfolio
        </AnchorSelf>
      </MantineNavbar.Section>
      <MantineNavbar.Section>
        <AnchorSelf href='contact' color='white'>
          Contact
        </AnchorSelf>
      </MantineNavbar.Section>
    </MantineNavbar>
  ) : (
    <div></div>
  );
};
