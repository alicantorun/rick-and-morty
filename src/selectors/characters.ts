// getVisibleCharacters
const getVisibleCharacters = (
  characters: any,
  { name = "", status = "", sortBy, dates = ["01-01-1950", "01-01-2025"] }: any
) => {
  const filteredCharacters =
    characters &&
    characters.data &&
    characters.data.results &&
    characters.data.results
      .filter((character: any) =>
        character.name.toLowerCase().includes(name.toLowerCase())
      )
      .filter((character: any) =>
        character.status.toLowerCase().includes(status.toLowerCase())
      )
      .filter(
        (character: any) =>
          new Date(character.created).getTime() >
            new Date(dates[0]).getTime() &&
          new Date(character.created).getTime() < new Date(dates[1]).getTime()
      )
      .sort((character1: any, character2: any) => {
        if (sortBy === "ascending") {
          return character1.name.localeCompare(character2.name);
        } else if (sortBy === "descending") {
          return character2.name.localeCompare(character1.name);
        } else {
          return;
        }
      });
  characters.data.filteredCharacters = filteredCharacters;

  return characters;
};

export default getVisibleCharacters;
