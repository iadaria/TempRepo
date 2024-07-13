import { useMemo, useRef } from 'react';

//const debounce = (func: (wants: string) => void, delay: number) => {
const debounce = (func: () => void, delay: number) => {
  //let timeoutId // After show an error
  let timeoutId: NodeJS.Timeout;

  //return (wants: string) => {
  return () => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(this);
    }, delay);
  };
};

export const useDebounce = (callback: () => void) => {
  const ref = useRef(callback);
  ref.current = callback;

  const debouncedCallback = useMemo(() => {
    const func = () => {
      ref.current?.();
      //ref.current?.(watns);
    };

    return debounce(func, 1000);
  }, []);

  return debouncedCallback;
};
