export interface UseFavouriteListStorage {
  storedValue: string[];
  appendValue: (valueToStore: string) => void;
  removeValue: (valueToStore: string) => void;
}
