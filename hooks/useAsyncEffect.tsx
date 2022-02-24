import { useEffect } from 'react';
import type { DependencyList } from 'react';

/**
 * @param 自定义useEffect,解决 useEffect无法使用async
 * @use  useAsyncEffect(() => {}, []);
 */
function useAsyncEffect(effect: () => void, deps?: DependencyList) {
  useEffect(() => {
    (async () => {
      await effect();
    })();
  }, deps);
}

export default useAsyncEffect;
