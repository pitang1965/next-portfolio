import { FC, ReactNode, useEffect, useState } from 'react';
import Head from 'next/head';
import { useAtom } from 'jotai';
import { isMobileUiAtom } from 'src/atoms/uiMode';
import { AppShell } from '@mantine/core';
import { Header } from './Header';
import { Footer } from './Footer';
import { Navbar } from 'src/components/layout/Navbar';
import { useElementSize } from '@mantine/hooks';
import { isMobileWidth } from 'src/utils/mobile';

type Props = {
  children: ReactNode;
  content: string;
};

export const Layout: FC<Props> = (props) => {
  const [opened, setOpened] = useState<boolean>(false);
  const [isMobileUi, setIsMobileUi] = useAtom(isMobileUiAtom);
  const { ref, width } = useElementSize();

  useEffect(() => {
    if (width !== 0 && isMobileWidth(width) !== isMobileUi) {
      setIsMobileUi(isMobileWidth(width));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);

  function toggleOpenState(): void {
    setOpened((prev) => !prev);
  }

  return (
    <AppShell
      padding='md'
      header={<Header opened={opened} toggleOpenState={toggleOpenState} />}
      footer={<Footer />}
      navbarOffsetBreakpoint='sm'
      navbar={<Navbar opened={opened} toggleOpenState={toggleOpenState} />}
      ref={ref}
    >
      <Head>
        <title>Next Portfolio</title>
        <meta
          name='description'
          content={`https://my-og-img.vercel.app/api/og?title=${props.content}`}
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {props.children}
    </AppShell>
  );
};
