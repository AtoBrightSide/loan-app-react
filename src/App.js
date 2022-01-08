import { ThemeProvider } from "styled-components"
import Header from "./components/Header"
import Forms from "./components/Forms"
import { useState } from "react"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const LightTheme = {
  bodyColor: "linear-gradient(90deg, rgb(225,215,220) 0%, rgb(166, 153, 255) 100%)",
  navBar: "linear-gradient(90deg, rgb(225,215,220) 0%, rgb(166, 153, 255) 100%)",
  titleColor: "black",
  textColor: "black",
  buttonColor: "#000",
  buttonTextColor: "white",
};

const DarkTheme = {
  bodyColor: 'linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%)',
  navBar: "linear-gradient(90deg, rgb(28, 27, 27) 0%, rgb(26, 23, 23) 100%)",
  titleColor: "white",
  textColor: "white",
  buttonColor: "#fff",
  buttonTextColor: "black",
};

const themes = {
  light: LightTheme,
  dark: DarkTheme,
}

function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <>
      <ThemeProvider theme={themes[theme]}>
        <Router>
          <Header theme={theme} setTheme={setTheme} />
          <Switch>
            <Route theme={theme} setTheme={setTheme} path='/' exact component={Forms} />
          </Switch>
        </Router>

      </ThemeProvider>
    </>
  );
}

export default App;
