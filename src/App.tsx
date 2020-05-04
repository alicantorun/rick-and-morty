import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { Route, Switch } from "react-router-dom";

import * as ROUTES from "./constants/routes";

import Characters from "./pages/Characters";
import Home from "./pages/Home";

import ThemeProvider from "./ThemeProvider";
import store from "./store";
import Header from "./components/Header/Header";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path={ROUTES.HOME} component={Home} />
            <Route path={ROUTES.CHARACTER_LIST} component={Characters} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
