/**
 * 组件卸载时取消useEffect中的所有订阅和异步任务（避免内存泄露）
 * @return {*}
 */
declare const useCancelAsync: () => {
    isMounted: import("react").MutableRefObject<boolean>;
};
export default useCancelAsync;
