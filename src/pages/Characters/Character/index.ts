import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as CharacterCreators } from "../../../store/ducks/character";

import CharacterControl from "./CharacterControl";

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(CharacterCreators, dispatch);

const mapStateToProps = (state: any) => ({
  character: state.character,
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterControl);
