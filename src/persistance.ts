import { useCallback, useState } from "react";

export function usePersistedState<T>(initialValue: T, storageKey: string) {
  const savedItem = localStorage.getItem(storageKey);
  const initialState: T =
    savedItem === null ? initialValue : JSON.parse(savedItem);

  const [state, setState] = useState(initialState);
  const setLocalStorageAndState = useCallback(
    (state: T) => {
      localStorage.setItem(storageKey, JSON.stringify(state));
      setState(state);
    },
    [setState, storageKey]
  );

  return [state, setLocalStorageAndState] as const;
}
