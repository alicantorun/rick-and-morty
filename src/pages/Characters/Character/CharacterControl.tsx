import React, { useEffect } from "react";
import CharacterView from "./CharacterView";
import { useParams } from "react-router-dom";

const CharacterControl = (props: any) => {
  const { getCharacter, character } = props;
  const { data, error, loading } = character;
  let { id } = useParams();

  useEffect(() => {
    getCharacter(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  console.log(character);

  return <CharacterView error={error} loading={loading} data={data} />;
};

export default CharacterControl;
