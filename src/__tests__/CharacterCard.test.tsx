import React from "react";
import { mount, shallow } from "enzyme";
import CharacterCard from "../components/CharacterCard/CharacterCard";
import {
  Header,
  Body,
  TextWrapper,
  Wrapper,
  Image,
  Title,
} from "../components/CharacterCard/CharacterCard.styles";
import { darkTheme } from "../theme/theme";
import { shallowWithTheme, mountWithTheme } from "../__mocks__/ThemeProvider";
import { ThemeProvider } from "styled-components";

import sinon from "sinon";

const ThemeProviderWrapper = ({ children }: any) => (
  <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
);

jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

const testProps = {
  location: "earth",
  species: "human",
  created: "2017-11-04T18:48:46.250Z",
  status: "alive",
  gender: "male",
  origin: "test",
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  name: "Rick Sanchez",
  id: "1",
};

describe("CharacterCard Tests", () => {
  it("It should render a <Header /> a <Body /> and 5 <TextWrapper /> components", () => {
    const wrapper = shallow(<CharacterCard />);
    expect(wrapper.find(Header)).toHaveLength(1);
    expect(wrapper.find(Body)).toHaveLength(1);
    expect(wrapper.find(TextWrapper)).toHaveLength(5);
  });

  // it("It should simulate a click event", () => {
  //   const onClick = sinon.spy();
  //   const wrapper = shallowWithTheme(<Wrapper onClick={onClick} />);
  //   wrapper.find("div").simulate("click");
  //   expect(onClick).toHaveProperty("callCount", 1);
  // });

  it("simulates click event", () => {
    const onClick = sinon.spy();
    const wrapper = shallow(<Wrapper theme={darkTheme} onClick={onClick} />, {
      wrappingComponent: ThemeProviderWrapper,
    });
    wrapper.find("div").simulate("click");
    expect(onClick).toHaveProperty("callCount", 1);
  });

  it("It should render an image when passed a url", () => {
    const wrapper = shallow(<Image />);
    wrapper.setProps({ src: testProps.image });
    expect(wrapper.props().src).toEqual(testProps.image);
  });
});
