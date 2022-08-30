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
  console.log(`href: ${props.href} asPath: ${router.asPath}`);

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

  return (
    <Link href={props.href}>
      <Anchor
        component='a'
        sx={(theme) => ({
          color:
            props.color || theme.colorScheme === 'dark'
              ? theme.white
              : theme.black,
          borderStyle: isthePath()
            ? 'solid'
            : isLowerPath()
            ? 'dotted'
            : 'none',
          borderBottomWidth: '2px',
          '&:hover': {
            textDecoration: 'none',
          },
        })}
      >
        {' '}
        {props.children}{' '}
      </Anchor>
    </Link>
  );
};
