import React from "react";
// import "./styles.css";
import FilterByStatus from "../../../../components/FilterByStatus/FilterByStatus";
import CharacterCard from "../../../../components/CharacterCard/CharacterCard";
import FilterByDate from "../../../../components/FilterByDate/FilterByDate";
import FilterByName from "../../../../components/FilterByName/FilterByName";
import Pagination from "../../../../components/Pagination/Pagination";
import SortByName from "../../../../components/SortByName/SortByName";
import Container from "../../../../components/Container";
import { Grid, Cell } from "styled-css-grid";

interface Props {
  sortCharactersByName?: any;
  onHandleResetFilters?: any;
  handlePageClick?: any;
  filterByStatus?: any;
  statusFilter?: any;
  filterByDate?: any;
  filterByName?: any;
  orderFilter?: any;
  sorterName?: any;
  pageNumber?: any;

  itemsPaged?: any;
  pageCount?: any;
  loading?: any;
  error?: any;
}

const ExampleView: React.FC<Props> = ({
  sortCharactersByName,
  onHandleResetFilters,
  handlePageClick,
  filterByStatus,
  statusFilter,
  filterByDate,
  filterByName,
  orderFilter,
  pageNumber,
  itemsPaged,

  pageCount,
  loading,
  error,
}) => {
  return (
    <Container>
      <SortByName sortCharactersByName={sortCharactersByName} />
      <FilterByStatus filterByStatus={filterByStatus} />
      <FilterByName filterByName={filterByName} />
      <FilterByDate filterByDate={filterByDate} />
      <button onClick={onHandleResetFilters}>Reset Filter</button>
      {loading && !error && <div>LOADING</div>}
      {!loading && error && <div>ERROR</div>}
      {!loading && !error && (
        <>
          <Grid gap="20px" columns="repeat(auto-fit,minmax(300px,1fr))">
            {itemsPaged &&
              itemsPaged.map((character: any) => {
                const { image, id, gender, name, species, status } = character;
                return (
                  <Cell key={id}>
                    <CharacterCard
                      species={species}
                      gender={gender}
                      status={status}
                      image={image}
                      name={name}
                      id={id}
                    />
                  </Cell>
                );
              })}
          </Grid>
        </>
      )}
      <Pagination
        onPageChange={handlePageClick}
        pageNumber={pageNumber}
        pageCount={pageCount}
      />
    </Container>
  );
};

export default ExampleView;
