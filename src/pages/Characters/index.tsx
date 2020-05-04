import React from "react";
import { Route } from "react-router-dom";

import CharacterList from "./CharacterList";
import Character from "./Character";
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
      <Route
        exact
        path={routes.view}
        render={(props) => <Character {...props} />}
      />
      <Route
        exact
        path={routes.list}
        render={(props) => <CharacterList {...props} />}
      />
    </>
  );
}

export default Characters;
