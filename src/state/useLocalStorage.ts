import { useState } from "react";

export function useLocalStorage(
  key: string,
  initialValue: string
): [string, Function] {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // console.log(error);
      return initialValue;
    }
  });
  const setValue = (valueToStore: string): void => {
    try {
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // console.log(error);
    }
  };

  return [storedValue, setValue];
}
