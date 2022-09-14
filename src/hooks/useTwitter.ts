import useSWR from 'swr';

export function useTwitter() {
  const { data, error } = useSWR('/api/twitter');

  return {
    tweets: data?.data,
    userName: data?.includes.users[0].username,
    userScreenName: data?.includes.users[0].name,
    isLoading: !error && !data,
    isError: error,
  };
}
