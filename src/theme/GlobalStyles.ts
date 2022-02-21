import { createGlobalStyle, withTheme } from "styled-components";
import { ThemeProps } from "../types/Theme";

const globalStyle = createGlobalStyle<{ theme: ThemeProps }>`
    :root {
      font-size: 1rem;
    }

    body {
      background-color: ${({ theme }) => theme.background};
      transition: all 0.2s ease-in-out;
    }

    h1 {
      font-size: 1.5rem;
      font-weight: bold;
      color: ${({ theme }) => theme.primary};
      transition: all 0.2s ease-in-out;
    }

    h2 {
      font-size: 1.25rem;
      font-weight: normal;
      color: ${({ theme }) => theme.text};
      transition: all 0.2s ease-in-out;
      margin: 5px 0;
    }

    small {
      font-size: 0.75rem;
      font-weight: bold;
      color: ${({ theme }) => theme.textSecondary};
      transition: all 0.2s ease-in-out;
    }

    p {
      font-size: 1rem;
      font-weight: bold;
      color: ${({ theme }) => theme.text};
      transition: all 0.2s ease-in-out;
    }


  `;

export default withTheme(globalStyle);
