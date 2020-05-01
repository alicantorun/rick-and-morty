import React, { useEffect, useState } from "react";
import CharactersListView from "./CharactersListView";

const CharactersListControl = (props: any) => {
  const { getCharacters, characters } = props;
  const [page, setPage] = useState(1);

  const { data, error, loading } = characters;

  //   useEffect(() => {
  //     // const { fetchItems, itemsCurrentPage } = props;
  //     // fetchItems(itemsCurrentPage);
  //     getCharacters(1);
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

  useEffect(() => {
    // const { fetchItems, itemsCurrentPage } = props;
    // fetchItems(itemsCurrentPage);
    getCharacters(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  //   console.log("Character List Control Props: ", characters);

  const handleNext = () => {
    // const { fetchItems, itemsCurrentPage } = props;
    // fetchItems(itemsCurrentPage + 1);
    setPage(page + 1);
  };

  const handlePrevious = () => {
    // const { fetchItems, itemsCurrentPage } = props;
    // fetchItems(itemsCurrentPage - 1);
    setPage(page - 1);
  };

  const handlePageClick = (data: any) => {
    // let selected = data.selected;
    // let offset = Math.ceil(selected * this.props.perPage);

    // this.setState({ offset: offset }, () => {
    //   this.loadCommentsFromServer();
    // });

    setPage(data.selected + 1);
  };

  //   const {
  //   itemsPaged,
  //   itemsCurrentPage,
  //   itemsErrored,
  //   itemsLastPage,
  //   itemsRequested,
  // characters,
  //   } = props;

  //   if (itemsRequested) return <div>Requested</div>;

  //   if (itemsErrored) return <div>Errored</div>;

  return (
    <CharactersListView
      onNext={handleNext}
      onPrevious={handlePrevious}
      itemsPaged={characters}
      itemsCurrentPage={page}
      itemsLastPage={data && data.info && data.info.pages}
      pageCount={data && data.info && data.info.pages}
      handlePageClick={handlePageClick}
    />
  );
};

export default CharactersListControl;
