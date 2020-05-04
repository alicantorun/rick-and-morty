import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Wrapper, Button } from "./FilterByDate.styles";
import { FaSearch } from "react-icons/fa";

const FilterByDate = (props: any) => {
  const [startDate, setStartDate] = useState(
    new Date("2017-10-04T18:48:46.250Z")
  );
  const [endDate, setEndDate] = useState(new Date());

  const handleClick = () => {
    props.filterByDate([startDate, endDate]);
  };

  useEffect(() => {
    setStartDate(new Date("2017-10-04T18:48:46.250Z"));
    setEndDate(new Date());
  }, [props.dateFilter]);

  return (
    <Wrapper>
      <DatePicker
        selected={startDate}
        onChange={(date: any) => setStartDate(date)}
      />
      <DatePicker
        selected={endDate}
        onChange={(date: any) => setEndDate(date)}
      />
      <Button onClick={handleClick}>
        <FaSearch />
      </Button>
    </Wrapper>
  );
};

export default FilterByDate;
