/**
 * @param 自定义useState,解决 useState 没有返回回调函数取得更新后变量的问题
 * @use  const [count, setCount] = useAsyncState(0);
 * @use  setCount(count - 1).then((count) => console.log(`最新count的值： ${count}`));
 */
declare function useAsyncState<T = any>(initialValue: T): [T, (x: T) => Promise<T>];
export default useAsyncState;
