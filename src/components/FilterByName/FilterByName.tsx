import React from "react";
import { Input } from "./FilterByName.styles";

function FilterByName(props: any) {
  return (
    <Input
      placeholder="Search..."
      value={props.nameFilter}
      onChange={props.filterByName}
    />
  );
}

export default FilterByName;
