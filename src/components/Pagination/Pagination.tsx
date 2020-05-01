import React from "react";
import { Wrapper } from "./Pagination.styles";

import ReactPaginate from "react-paginate";

const Pagination = ({ pageCount, onPageChange }: any) => {
  return (
    <Wrapper>
      <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        breakLabel={<span className="gap">...</span>}
        // breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={onPageChange}
        containerClassName={"pagination"}
        previousLinkClassName={"previousPage"}
        nextLinkClassName={"nextPage"}
        disabledClassName={"disabled"}
        activeClassName={"active"}
        nextClassName={"next"}
        previousClassName={"previous"}
        pageLinkClassName={"pageLink"}

        // subContainerClassName={"pages pagination"}
        // activeClassName={"active"}
      />
    </Wrapper>
  );
};

export default Pagination;
