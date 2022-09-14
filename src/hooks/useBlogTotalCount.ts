import useSWR from 'swr';

export function useBlogTotalCount() {
  const { data, error } = useSWR('/api/blog-total-count');

  return {
    blogTotalCount: data,
    isLoading: !error && !data,
    isError: error,
  };
}
