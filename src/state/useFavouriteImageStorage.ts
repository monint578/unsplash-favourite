import { useCallback, useEffect, useState } from "react";
import { UseFavouriteListStorage } from "../types/FavouriteListStorage";

export const useFavouriteImageStorage = (
  key: string
): UseFavouriteListStorage => {
  const [storedValue, setStoredValue] = useState<string[]>([]);
  const item = window.localStorage.getItem(key);

  useEffect(() => {
    item ? setStoredValue(JSON.parse(item)) : setStoredValue([]);
  }, [item]);

  const appendValue = useCallback(
    (valueToStore: string) => {
      try {
        setStoredValue((prevState: string[]) => [...prevState, valueToStore]);
        window.localStorage.setItem(
          key,
          JSON.stringify([...storedValue, valueToStore])
        );
      } catch (error) {
        // console.error(error);
      }
    },
    [key, storedValue]
  );

  const removeValue = useCallback(
    (valueToStore: string): void => {
      try {
        const array = storedValue.filter(
          (item: string) => item !== valueToStore
        );
        setStoredValue(array);
        window.localStorage.setItem(key, JSON.stringify(array));
      } catch (error) {
        // console.error(error);
      }
    },
    [key, storedValue]
  );

  return { storedValue, appendValue, removeValue };
};
