import { useState, useEffect, useCallback } from 'react';

interface FetchState<T> {
  data: T | null;
  isLoading: boolean;
  error: string | null;
}

export function useDataFetch<T>(
  fetchFn: (signal: AbortSignal) => Promise<T>,
): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    isLoading: true,
    error: null,
  });

  const load = useCallback(
    (signal: AbortSignal) => {
      setState({ data: null, isLoading: true, error: null });
      fetchFn(signal)
        .then((data) => {
          if (!signal.aborted) setState({ data, isLoading: false, error: null });
        })
        .catch((err: Error) => {
          if (err.name !== 'AbortError' && !signal.aborted) {
            setState({ data: null, isLoading: false, error: err.message });
          }
        });
    },
    [fetchFn],
  );

  useEffect(() => {
    const controller = new AbortController();
    load(controller.signal);
    return () => controller.abort();
  }, [load]);

  return state;
}
