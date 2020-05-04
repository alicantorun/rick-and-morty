import React from "react";
import { Button } from "./styles";
import FilterByStatus from "../../../../components/FilterByStatus/FilterByStatus";
import CharacterCard from "../../../../components/CharacterCard/CharacterCard";
import FilterByDate from "../../../../components/FilterByDate/FilterByDate";
import FilterByName from "../../../../components/FilterByName/FilterByName";
import Pagination from "../../../../components/Pagination/Pagination";
import SortByName from "../../../../components/SortByName/SortByName";
import useWindowSize from "../../../../hooks/useWindowSize";
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
  sortFilter?: any;
  sorterName?: any;
  nameFilter?: any;
  dateFilter?: any;
  pageNumber?: any;
  pageCount?: any;
  loading?: any;
  reload?: any;
  error?: any;
  data?: any;
}

const ExampleView: React.FC<Props> = ({
  sortCharactersByName,
  onHandleResetFilters,
  handlePageClick,
  filterByStatus,
  statusFilter,
  filterByName,
  filterByDate,
  nameFilter,
  sortFilter,
  dateFilter,
  pageNumber,
  pageCount,
  loading,
  reload,
  error,
  data,
}) => {
  const size = useWindowSize();

  return (
    <Container>
      <div style={{ marginBottom: "20px", marginTop: "20px" }}>
        <Grid gap="10px" columns="repeat(auto-fit, minmax(300px, 1fr))">
          <Cell>
            <FilterByDate
              reload={reload}
              dateFilter={dateFilter}
              filterByDate={filterByDate}
            />
          </Cell>
          <Cell>
            <SortByName
              sortCharactersByName={sortCharactersByName}
              sortFilter={sortFilter}
            />
          </Cell>
          <Cell>
            <FilterByStatus
              filterByStatus={filterByStatus}
              statusFilter={statusFilter}
            />
          </Cell>
          <Cell>
            <FilterByName nameFilter={nameFilter} filterByName={filterByName} />
          </Cell>
          <Cell width={size && size.width && size.width > 677 ? 2 : 1}>
            <Button onClick={onHandleResetFilters}>Reset Filter</Button>
          </Cell>
        </Grid>
      </div>
      {loading && !error && <div>LOADING</div>}
      {!loading && error && <div>ERROR</div>}
      {!loading && !error && (
        <>
          <Grid gap="20px" columns="repeat(auto-fit,minmax(300px,1fr))">
            {data.map((character: any) => {
              const {
                location,
                created,
                species,
                gender,
                status,
                origin,
                image,
                name,
                id,
              } = character;

              return (
                <Cell
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }}
                  key={id}
                >
                  <CharacterCard
                    location={location}
                    created={created}
                    species={species}
                    gender={gender}
                    origin={origin}
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
