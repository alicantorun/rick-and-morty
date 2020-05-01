import React, { lazy } from "react";
import { Route } from "react-router-dom";

import CharactersList from "./CharactersList";
// const CharactersView = lazy(() => import("./CharactersView"));

function Characters(props: any) {
  const { match } = props;
  const { path } = match;
  const routes = {
    view: `${path}/:id`,
    list: path,
  };

  return (
    <>
      {/* <Route
        exact
        path={routes.view}
        render={(props) => <CharactersView routes={routes} {...props} />}
      /> */}
      <Route
        exact
        path={routes.list}
        render={(props) => <CharactersList routes={routes} {...props} />}
      />
    </>
  );
}

export default Characters;
