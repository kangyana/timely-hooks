import type { DependencyList } from 'react';
/**
 * @param 自定义useEffect,解决 useEffect无法使用async
 * @use  useAsyncEffect(() => {}, []);
 */
declare function useAsyncEffect(effect: () => void, deps?: DependencyList): void;
export default useAsyncEffect;
