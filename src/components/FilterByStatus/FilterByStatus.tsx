import React from "react";

function FilterByStatus(props: any) {
  return (
    <div style={{ width: "100%", margin: 10 }}>
      <select value={props.statusFilter} onChange={props.filterByStatus}>
        <option value="">Filter by Status</option>

        <option value={"Alive"}>Alive</option>
        <option value={"Dead"}>Dead</option>
        <option value={"unknown"}>Unknown</option>
      </select>
    </div>
  );
}

export default FilterByStatus;
