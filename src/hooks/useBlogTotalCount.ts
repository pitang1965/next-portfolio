import useSWR from 'swr';

export function useBlogTotalCount() {
  const { data, error, isLoading } = useSWR('/api/blog-total-count');

  return {
    blogTotalCount: data,
    isLoading,
    isError: error,
  };
}
