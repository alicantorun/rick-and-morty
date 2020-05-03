import React from "react";

function SortByName(props: any) {
  return (
    <div
    // style={{ width: "100%", margin: 10 }}
    >
      <select onChange={props.sortCharactersByName} value={props.orderFilter}>
        <option value="">Sort by</option>

        <option value={"ascending"}>Name - A-Z</option>
        <option value={"descending"}>Name - Z-A</option>
      </select>
    </div>
  );
}

export default SortByName;
