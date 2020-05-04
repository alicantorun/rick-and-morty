import React from "react";

import { mount } from "enzyme";
import { MemoryRouter } from "react-router";
import Home from "../pages/Home";
import Characters from "../pages/Characters";
import NotFound from "../pages/NotFound";
import App from "../../src/App";
import * as ROUTES from "../constants/routes";

describe("App Routing tests", () => {
  test("It should render Home Page", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ROUTES.HOME]}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(Home)).toHaveLength(1);
  });

  test("It should render Character List", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ROUTES.CHARACTER_LIST]}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(Characters)).toHaveLength(1);
  });

  test("invalid path should redirect to 404", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/random"]}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(NotFound)).toHaveLength(1);
    expect(wrapper.find(Home)).toHaveLength(0);
  });
});
