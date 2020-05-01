import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as CharactersCreators } from "../../../store/ducks/characters";

import CharactersListControl from "./CharactersListControl";

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(CharactersCreators, dispatch);

const mapStateToProps = (state: any) => ({
  characters: state.characters,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharactersListControl);
