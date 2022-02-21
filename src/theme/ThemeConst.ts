import { ThemeProps } from "../types/Theme";

const shared = {
  error: "#D8000C",
  errorBackground: "#FFBABA",
};

export const darkTheme: ThemeProps = {
  background: "#151515",
  backgroundOpacity: "rgba(21, 21, 21, 0.25)",
  text: "#FFFFFF",
  textSecondary: "#ADADAD",
  primary: "#118DBA",
  primaryDarken: "#37789d",
  navigation: "#242424",
  grey: "#707070",
  backdrop: "#151515CC",
  ...shared,
};

export const lightTheme: ThemeProps = {
  background: "#FFFFFF",
  backgroundOpacity: "rgba(255, 255, 255, 0.25)",
  text: "#141414",
  textSecondary: "#ADADAD",
  primary: "#118DBA",
  primaryDarken: "#37789d",
  navigation: "#F4F4F4",
  grey: "#707070",
  backdrop: "#151515CC",
  ...shared,
};
