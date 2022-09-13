import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useTwitter() {
  const { data, error } = useSWR('/api/twitter', fetcher);

  return {
    tweets: data?.data,
    userName: data?.includes.users[0].username,
    userScreenName: data?.includes.users[0].name,
    isLoading: !error && !data,
    isError: error,
  };
}
