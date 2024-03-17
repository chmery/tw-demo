import { useEffect, useRef } from "react";

export const useClickedOutside = <T extends HTMLElement>(
  callback: () => void
) => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const clickHandler = (e: MouseEvent) => {
      if (ref.current && ref.current.contains(e.target as Node)) return;
      callback();
    };

    document.addEventListener("click", clickHandler);
    return () => {
      document.removeEventListener("click", clickHandler);
    };
  }, [callback]);

  return ref;
};
