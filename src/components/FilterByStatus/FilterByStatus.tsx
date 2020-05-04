import React, { useState } from "react";
import { Select } from "./FilterByStatus.styles";

function FilterByStatus(props: any) {
  return (
    <Select value={props.statusFilter} onChange={props.filterByStatus}>
      <option value="">Filter by Status</option>
      <option value={"Alive"}>Alive</option>
      <option value={"Dead"}>Dead</option>
      <option value={"unknown"}>Unknown</option>
    </Select>
  );
}

export default FilterByStatus;
