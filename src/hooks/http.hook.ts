import { useState, useCallback } from "react";

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'; // Типізація HTTP методів
type ProcessState = 'waiting' | 'loading' | 'error' | 'success'; // Типізація статусу процесу

export const useHttp = () => {
  const [process, setProcess] = useState<ProcessState>('waiting');

  const request = useCallback(
    async <T>(
      url: string,
      method: RequestMethod = 'GET',
      body: any = null,
      headers: Record<string, string> = { 'Content-Type': 'application/json' }
    ): Promise<T> => {
      setProcess('loading');

      try {
        const response = await fetch(url, { method, body: body ? JSON.stringify(body) : null, headers });

        if (!response.ok) {
          throw new Error(`Could not fetch ${url}, status: ${response.status}`);
        }

        const data = await response.json() as T;
        setProcess('success');
        return data;
      } catch (e) {
        setProcess('error');
        throw e;
      }
    },
    []
  );

  const clearError = useCallback(() => {
    setProcess('waiting');
  }, []);

  return { request, clearError, process, setProcess };
};