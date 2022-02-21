import React, { useCallback, useContext } from "react";
import { ThemeContext } from "../../theme/ThemeContext";
import { ReactComponent as Sun } from "../../assets/sun.svg";
import { ReactComponent as Moon } from "../../assets/moon.svg";

export function ThemeButton(): JSX.Element {
  const { theme, setTheme } = useContext(ThemeContext);

  const swapTheme = useCallback(() => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [theme, setTheme]);

  return (
    <button onClick={swapTheme} type="button">
      {theme === "light" ? <Moon /> : <Sun />}
    </button>
  );
}
