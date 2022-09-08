import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useBlogTotalCount() {
  const { data, error } = useSWR('/api/blog-total-count', fetcher);

  return {
    blogTotalCount: data,
    isLoading: !error && !data,
    isError: error,
  };
}
