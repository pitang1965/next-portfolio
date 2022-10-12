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
import { siteUrl } from 'data/urls';

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

  const siteTitle = 'Next Portfolio';
  const siteDescription =
    'Next.jsで作成したPitang1965のポートフォリオサイトです。';
  const imageUrl = `${siteUrl}/api/og?title=${props.content}`;
  const twitter = '@pitang1965';

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
        <title>{siteTitle}</title>
        <meta name='description' content={imageUrl} />
        <meta property='og:url' content={siteUrl} />
        <meta property='og:title' content={siteTitle} />
        <meta property='og:site_name' content={siteTitle} />
        <meta property='og:description' content={siteDescription} />
        <meta property='og:type' content='website' />
        <meta property='og:image' content={imageUrl} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content={twitter} />
        <meta name='twitter:creator' content={twitter} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {props.children}
    </AppShell>
  );
};
