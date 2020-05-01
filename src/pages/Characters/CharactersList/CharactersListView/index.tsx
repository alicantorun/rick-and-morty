import React from "react";
// import "./styles.css";
import ReactPaginate from "react-paginate";

const ExampleView = (
  //     {
  //   itemsCurrentPage,
  //   itemsLastPage,
  //   itemsPaged,
  //   onNext,
  //   onPrevious,
  // }
  props: any
) => {
  console.log("Character List View Props: ", props);

  return (
    <div>
      <ul id="items">
        {props.itemsPaged &&
          props.itemsPaged.data &&
          props.itemsPaged.data.results &&
          props.itemsPaged.data.results.map((item: any) => (
            <li key={item.id} className="item">
              {item.name}
            </li>
          ))}
      </ul>
      {/* {props.itemsCurrentPage !== 1 && (
        <button onClick={props.onPrevious} className="button">
          Previous
        </button>
      )}
      {props.itemsCurrentPage !== props.itemsLastPage && (
        <button onClick={props.onNext} className="button">
          Next
        </button>
      )} */}
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        // breakClassName={"break-me"}
        pageCount={props.pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={props.handlePageClick}
        // containerClassName={"pagination"}
        // subContainerClassName={"pages pagination"}
        // activeClassName={"active"}
      />
    </div>
  );
};

export default ExampleView;
