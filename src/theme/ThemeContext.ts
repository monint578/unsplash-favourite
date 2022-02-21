import { createContext } from "react";

interface ContextProps {
  theme: string;
  setTheme: Function;
}

export const ThemeContext = createContext<ContextProps>({
  theme: "",
  setTheme: () => null,
});
