import { useState } from 'react';
/**
 * @param 自定义useState,解决 useState 没有返回回调函数取得更新后变量的问题
 * @use  const [count, setCount] = useAsyncState(0);
 * @use  setCount(count - 1).then((count) => console.log(`最新count的值： ${count}`));
 */
function useAsyncState<T = any>(initialValue: T) {
  const [value, setValue] = useState(initialValue);

  const setter = (x: T) =>
    new Promise<T>((resolve) => {
      setValue(x);
      resolve(x);
    });

  return [value, setter] as [typeof value, typeof setter];
}

export default useAsyncState;
