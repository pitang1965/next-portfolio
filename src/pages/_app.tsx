import type { AppProps } from 'next/app';
import {
  ColorScheme,
  ColorSchemeProvider,
  Global,
  MantineProvider,
} from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { NotificationsProvider } from '@mantine/notifications';
import { SWRConfig } from 'swr';

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
            theme.colorScheme === 'dark' ? theme.black : theme.white,
          color: theme.colorScheme === 'dark' ? theme.white : theme.black,
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
    <SWRConfig
      value={{ fetcher: (url: string) => fetch(url).then((res) => res.json()) }}
    >
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorSchem}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme,
            focusRingStyles: {
              inputStyles: (theme) => ({
                outline: `2px solid ${theme.colors.orange[5]}`,
              }),
            },
          }}
        >
          <NotificationsProvider>
            <MyGlobalStyles />
            <Component {...pageProps} />
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </SWRConfig>
  );
}

export default MyApp;
