import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { Route, Switch } from "react-router-dom";

import * as ROUTES from "./constants/routes";

import Characters from "./pages/Characters";

import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
import ThemeProvider from "./ThemeProvider";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <ThemeSwitcher />
          <Switch>
            {/* <Route exact path={ROUTES.HOME} component={Home} /> */}
            <Route path={ROUTES.CHARACTERS_LIST} component={Characters} />

            {/* <List /> */}
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
