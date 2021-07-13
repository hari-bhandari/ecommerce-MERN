import React, { useState, useRef, useEffect } from "react";
import ResizeObserver from "resize-observer-polyfill";

export function usePrevious(value: any) {
  const ref = useRef();
  useEffect(() => void (ref.current = value), [value]);
  return ref.current;
}

export function useMeasure() {
  const ref = useRef();
  const [bounds, set] = useState<any>({ left: 0, top: 0, width: 0, height: 0 });
  const [ro] = useState(
    () => new ResizeObserver(([entry]) => set(entry.contentRect))
  );
  useEffect(() => {
    if (ref.current) { // @ts-ignore
      ro.observe(ref.current);
    }
    return () => ro.disconnect();
  }, []);
  return [{ ref }, bounds];
}
