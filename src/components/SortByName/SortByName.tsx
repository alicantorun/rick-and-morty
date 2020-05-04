import React from "react";
import { Select } from "./SortByName.styles";

function SortByName(props: any) {
  return (
    <Select onChange={props.sortCharactersByName} value={props.sortFilter}>
      <option value="">Sort by</option>
      <option value={"ascending"}>Name - A-Z</option>
      <option value={"descending"}>Name - Z-A</option>
    </Select>
  );
}

export default SortByName;
