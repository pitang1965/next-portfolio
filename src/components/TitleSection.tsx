import React, { FC } from 'react';
import styles from './TitleSection.module.css';
import { Container, Stack, Space, Text } from '@mantine/core';

import { useAtom } from 'jotai';
import { isMobileUiAtom } from 'src/atoms/uiMode';
import { SnsIconGroup } from './common/SnsIconGroup';
import cx from 'classnames';

type Props = {
  name: string;
};

export const TitleSection: FC<Props> = (props) => {
  const [isMobileUi] = useAtom(isMobileUiAtom);

  return (
    <>
      <div className={styles.band} />
      <Container
        className={cx(
          styles.container,
          isMobileUi ? styles[`mobile-layout`] : styles[`pc-layout`]
        )}
      >
        <Stack align='flex-start' justify='center'>
          <Text
            sx={{ fontSize: isMobileUi ? 28 : 36 }}
            className={styles.title}
          >
            Pitang1965 Portfolio
          </Text>
          <Text size='md' className={styles.subTitle}>
            {props.name}のポートフォリオのためのページです
          </Text>
          {isMobileUi && <Space h='md' />}
        </Stack>
        <SnsIconGroup />
      </Container>
    </>
  );
};
