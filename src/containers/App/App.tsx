import React, { Suspense } from "react";
import Base from "../../components/Base/Base";
import Loader from "../../components/Loader/Loader";
import GlobalStyle from "../../theme/GlobalStyles";
import { ThemeContext } from "../../theme/ThemeContext";
import { useLocalStorage } from "../../state/useLocalStorage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lightTheme, darkTheme } from "../../theme/ThemeConst";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const ImagesPage = React.lazy(() => import("../ImagesPage/ImagesPage"));

const FavouriteImagesPage = React.lazy(
  () => import("../FavouriteImagesPage/FavouriteImagesPage")
);

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <StyledThemeProvider theme={themeMode}>
        <GlobalStyle theme={themeMode} />
        <Router>
          <Base>
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="/" element={<ImagesPage />} />
                <Route path="/favourite" element={<FavouriteImagesPage />} />
              </Routes>
            </Suspense>
          </Base>
        </Router>
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
