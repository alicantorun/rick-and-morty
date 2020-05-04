import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { Creators as CharacterCreators } from "../../../store/ducks/character";

import CharacterControl from "./CharacterControl";

type MyActionType =
  | { type: "STAND_UP"; who: number }
  | { type: "SIT_DOWN"; who: number };

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(CharacterCreators, dispatch);

const mapStateToProps = (state: any) => ({
  character: state.character,
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterControl);
