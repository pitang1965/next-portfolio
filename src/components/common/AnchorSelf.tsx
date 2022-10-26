import React, { FC, ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Anchor } from '@mantine/core';

type Props = {
  href: string;
  children: ReactNode;
  color?: string;
};

export const AnchorSelf: FC<Props> = (props) => {
  const router = useRouter();

  // このリンク先に今いるかどうか
  function isthePath(): boolean {
    return props.href === router.asPath;
  }

  // このリンク先の下層ページに今いるかどうか
  function isLowerPath(): boolean {
    if (props.href === '/') {
      return false;
    }
    return router.asPath.startsWith(props.href);
  }

  // ホームページに今いるかどうか
  function isHomePage(): boolean {
    return router.asPath === '/';
  }

  let borderStyle: string;

  if (isthePath()) {
    if (isHomePage()) {
      borderStyle = 'none';
    } else {
      borderStyle = 'solid';
    }
  } else {
    if (isLowerPath()) {
      borderStyle = 'dotted';
    } else {
      borderStyle = 'none';
    }
  }

  return (
    <Link href={props.href} legacyBehavior>
      <Anchor
        component='a'
        sx={(theme) => ({
          color:
            props.color || theme.colorScheme === 'dark'
              ? theme.white
              : theme.black,
          borderStyle: borderStyle,
          borderBottomWidth: '2px',
          '&:hover': {
            textDecoration: 'none',
            color: theme.colorScheme === 'dark' ? '#999999' : '#666666',
          },
        })}
      >
        {' '}
        {props.children}{' '}
      </Anchor>
    </Link>
  );
};
