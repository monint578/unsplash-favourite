import React, { useContext } from "react";
import { ThemeContext as KAzkas } from "../../theme/ThemeContext";
import { ReactComponent as Sun } from "../../assets/sun.svg";
import { ReactComponent as Moon } from "../../assets/moon.svg";
import { Button } from "./TogglerButton.style";

export function ThemeButton(): JSX.Element {
  const { theme, setTheme } = useContext(KAzkas);

  function swapTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <Button onClick={swapTheme}>
      {theme === "light" ? <Moon /> : <Sun />}
    </Button>
  );
}
interface Props {
  theme: string;
  toggleTheme: () => void;
}

const Toggle = ({ theme, toggleTheme }: Props) => {
  return (
    <Button onClick={toggleTheme}>
      {theme === "light" ? <Moon /> : <Sun />}
    </Button>
  );
};

export default Toggle;
