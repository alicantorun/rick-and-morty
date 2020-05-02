import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const FilterByDate = (props: any) => {
  const [startDate, setStartDate] = useState(
    new Date("2017-10-04T18:48:46.250Z")
  );
  const [endDate, setEndDate] = useState(new Date());

  const handleClick = () => {
    props.filterByDate([startDate, endDate]);
  };

  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date: any) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
      <DatePicker
        selected={endDate}
        onChange={(date: any) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
      <button onClick={handleClick}>Apply</button>
    </>
  );
};

export default FilterByDate;
