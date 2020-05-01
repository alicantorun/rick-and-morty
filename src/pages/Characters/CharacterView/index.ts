import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as CharacterCreators } from "../../../store/ducks/character";

import CharacterViewControl from "./CharacterViewControl";

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(CharacterCreators, dispatch);

const mapStateToProps = (state: any) => ({
  character: state.character,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterViewControl);
