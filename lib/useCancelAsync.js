"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = require("react");
/**
 * 组件卸载时取消useEffect中的所有订阅和异步任务（避免内存泄露）
 * @return {*}
 */


var useCancelAsync = function useCancelAsync() {
  var isMounted = (0, react_1.useRef)(true);
  (0, react_1.useEffect)(function () {
    return function () {
      isMounted.current = false;
    };
  }, []);
  return {
    isMounted: isMounted
  };
};

exports["default"] = useCancelAsync;