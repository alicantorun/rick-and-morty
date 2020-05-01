import React from "react";
// import "./styles.css";
import Pagination from "../../../../components/Pagination/Pagination";
import { Grid, Cell } from "styled-css-grid";
import CharacterCard from "../../../../components/CharacterCard/CharacterCard";
import Container from "../../../../components/Container";

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
  const { image, id, gender, name, species, status } =
    props.itemsPaged && props.itemsPaged;

  return (
    <Container>
      <Grid columns={3} gap="20px">
        <Cell>
          <CharacterCard
            image={image}
            id={id}
            gender={gender}
            name={name}
            species={species}
            status={status}
          />
        </Cell>
      </Grid>
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
      <Pagination
        pageCount={props.pageCount}
        onPageChange={props.handlePageClick}
      />
    </Container>
  );
};

export default ExampleView;
