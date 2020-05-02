import React, { useEffect, useState } from "react";
import CharactersListView from "./CharactersListView";

const CharactersListControl = (props: any) => {
  console.log(props);
  const [reload, setReload] = useState(0);
  const [fetchPageinatedApi, setFetchPageinatedApi] = useState(false);

  const {
    getAllCharacters,
    getCharacters,
    characters,
    filterStatus,
    filterDates,
    filterName,
    sortBy,
    clear,
  } = props;
  const { data, error, loading } = characters;
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (fetchPageinatedApi) {
      getCharacters(page);
    } else {
      getAllCharacters();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchPageinatedApi && page]);

  const handlePageClick = (data: any) => {
    setPage(data.selected + 1);
  };

  const handleSortCharactersByName = (e: any) => {
    setReload(reload + 1);
    sortBy(e.target.value);
  };

  const handleTypeFilter = (e: any) => {
    setReload(reload + 1);
    filterStatus(e.target.value);
  };

  const handleDateFilter = (value: any) => {
    setReload(reload + 1);
    filterDates(value);
  };

  const handleNameFilter = (e: any) => {
    setReload(reload + 1);
    filterName(e.target.value);
  };

  const handleResetFilters = () => {
    setReload(reload + 1);
    setPage(1);
    clear();
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
      <CharactersListView
        itemsPaged={fetchPageinatedApi ? data && data.results : renderItems}
        sortCharactersByName={handleSortCharactersByName}
        onHandleResetFilters={handleResetFilters}
        handlePageClick={handlePageClick}
        filterByStatus={handleTypeFilter}
        filterByDate={handleDateFilter}
        filterByName={handleNameFilter}
        pageNumber={page}
        loading={loading}
        error={error}
        pageCount={
          fetchPageinatedApi
            ? data && data.info && data.info.pages
            : filteredPageCount
        }
      />
    </>
  );
};

export default CharactersListControl;
