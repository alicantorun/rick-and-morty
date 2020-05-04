import React, { useEffect, useState } from "react";
import CharacterListView from "./CharacterListView";

const CharactersListControl = (props: any) => {
  const [statusFilter, setStatusFilter] = useState("");
  const [nameFilter, setNameFilter] = useState("");
  const [sortFilter, setSortFilter] = useState("");
  const [dateFilter, setDateFiilter] = useState(0);
  const [reload, setReload] = useState(0);
  const [page, setPage] = useState(1);

  const {
    getAllCharacters,
    filterStatus,
    filterDates,
    filterName,
    characters,
    sortBy,
    clear,
  } = props;

  const { data, error, loading } = characters;

  useEffect(() => {
    getAllCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSortCharactersByName = (e: any) => {
    setSortFilter(e.target.value);
    sortBy(e.target.value);
    setReload(reload + 1);
  };

  const handleDateFilter = (value: any) => {
    setReload(reload + 1);
    filterDates(value);
  };

  const handleStatusFilter = (e: any) => {
    setStatusFilter(e.target.value);
    filterStatus(e.target.value);
    setReload(reload + 1);
  };

  const handleNameFilter = (e: any) => {
    setNameFilter(e.target.value);
    filterName(e.target.value);
    setReload(reload + 1);
  };

  const handleResetFilters = () => {
    setDateFiilter(dateFilter + 1);
    setReload(reload + 1);
    setStatusFilter("");
    setNameFilter("");
    setSortFilter("");
    setPage(1);
    clear();
  };

  const handlePageClick = (data: any) => {
    setPage(data.selected + 1);
  };

  let filteredItems =
    characters && characters.data && characters.data.filteredCharacters;
  let filteredPageCount;
  let renderItems;
  if (data && data.results) {
    filteredPageCount = Math.ceil(filteredItems.length / 10);
    renderItems = filteredItems.slice((page - 1) * 10, page * 10);
  }

  return (
    <>
      <CharacterListView
        sortCharactersByName={handleSortCharactersByName}
        onHandleResetFilters={handleResetFilters}
        filterByStatus={handleStatusFilter}
        handlePageClick={handlePageClick}
        filterByName={handleNameFilter}
        filterByDate={handleDateFilter}
        pageCount={filteredPageCount}
        statusFilter={statusFilter}
        nameFilter={nameFilter}
        dateFilter={dateFilter}
        sortFilter={sortFilter}
        data={renderItems}
        loading={loading}
        pageNumber={page}
        reload={reload}
        error={error}
      />
    </>
  );
};

export default CharactersListControl;
