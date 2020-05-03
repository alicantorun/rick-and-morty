import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import getVisibleCharacters from "../../../selectors/characters";

import { Creators as CharactersCreators } from "../../../store/ducks/characters";
import { Creators as FiltersCreators } from "../../../store/ducks/filters";

import CharacterListControl from "./CharacterListControl";

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators<any, any>(
    Object.assign({}, CharactersCreators, FiltersCreators),
    dispatch
  );

const mapStateToProps = (state: any) => ({
  characters: getVisibleCharacters(state.characters, state.filters),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterListControl);
