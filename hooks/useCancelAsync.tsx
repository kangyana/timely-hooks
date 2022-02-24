import { useEffect, useRef } from 'react';
/**
 * 组件卸载时取消useEffect中的所有订阅和异步任务（避免内存泄露）
 * @return {*}
 */
const useCancelAsync = () => {
  const isMounted = useRef(true);

  useEffect(
    () => () => {
      isMounted.current = false;
    },
    [],
  );

  return {
    isMounted,
  };
};

export default useCancelAsync;
