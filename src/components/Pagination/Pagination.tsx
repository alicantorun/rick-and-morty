import React from "react";
import { Wrapper } from "./Pagination.styles";

import ReactPaginate from "react-paginate";

const Pagination = ({ pageCount, pageNumber, onPageChange }: any) => {
  return (
    <Wrapper>
      <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        breakLabel={<span className="gap">...</span>}
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
        forcePage={pageNumber - 1}

        // subContainerClassName={"pages pagination"}
        // activeClassName={"active"}
      />
    </Wrapper>
  );
};

export default Pagination;
