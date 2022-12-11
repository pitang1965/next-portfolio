import useSWR from 'swr';

export function useTwitter() {
  const { data, error, isLoading } = useSWR('/api/twitter');

  return {
    tweets: data?.data,
    userName: data?.includes.users[0].username,
    userScreenName: data?.includes.users[0].name,
    profileImageUrl: data?.includes.users[0].profile_image_url,
    isLoading,
    isError: error,
  };
}
