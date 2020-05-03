import React from "react";

function FilterByStatus(props: any) {
  return (
    <div
    // style={{ width: "100%", margin: 10 }}
    >
      <label>Search: </label>
      <input value={props.nameFilter} onChange={props.filterByName}></input>
    </div>
  );
}

export default FilterByStatus;
