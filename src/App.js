import { ThemeProvider } from "styled-components"
import Header from "./components/Header"
import Forms from "./components/Forms"
import { useState } from "react"
import Results from "./components/pages/Results"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const LightTheme = {
  backgroundColor: "#rgba(12,34,23)",
  navBar: "#1c1b1b",
  textColor: "rgb(0, 0, 0)",
  titleColor: "#fff",
  tagLineColor: "black",
  buttonColor: "#000",
};

const DarkTheme = {
  bodyColor: 'rgb(28, 27, 27)',
  navBar: "#b0d6ff",
  titleColor: "#000",
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
            <Route theme={theme} setTheme={setTheme} path='/results' exact component={Results} />
          </Switch>
        </Router>

      </ThemeProvider>
    </>
  );
}

export default App;
