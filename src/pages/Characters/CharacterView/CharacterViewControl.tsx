import React, { useEffect, useState } from "react";
import CharacterViewView from "./CharacterViewView";
import { useParams } from "react-router-dom";

const CharacterViewControl = (props: any) => {
  let { id } = useParams();

  const { getCharacter, character } = props;
  const [page, setPage] = useState(1);

  const { data, error, loading } = character;

  //   useEffect(() => {
  //     // const { fetchItems, itemsCurrentPage } = props;
  //     // fetchItems(itemsCurrentPage);
  //     getCharacters(1);
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

  useEffect(() => {
    // const { fetchItems, itemsCurrentPage } = props;
    // fetchItems(itemsCurrentPage);
    getCharacter(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

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
    <CharacterViewView
      onNext={handleNext}
      onPrevious={handlePrevious}
      itemsPaged={data && data}
      itemsCurrentPage={page}
      itemsLastPage={data && data.info && data.info.pages}
      pageCount={data && data.info && data.info.pages}
      handlePageClick={handlePageClick}
    />
  );
};

export default CharacterViewControl;
