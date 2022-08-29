import type { AppProps } from 'next/app';
import {
  ColorScheme,
  ColorSchemeProvider,
  Global,
  MantineProvider,
} from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';

function MyGlobalStyles() {
  return (
    <Global
      styles={(theme) => ({
        '*, *::before, *::after': {
          boxSizing: 'border-box',
          fontFamily:
            'YuGhothic -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
        },
        'body,  a': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
          color:
            theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
          textDecoration: 'none',
        },
        body: {
          overflowY: 'scroll',
        },
      })}
    />
  );
}

function MyApp({ Component, pageProps }: AppProps) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorSchem = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorSchem}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme: colorScheme }}
      >
        <MyGlobalStyles />

        <Component {...pageProps} />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default MyApp;
