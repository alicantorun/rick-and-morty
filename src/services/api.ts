import axios from "axios";

const apiUrl = "https://rickandmortyapi.com/api/character";

export const api = axios.create({
  baseURL: apiUrl,
});

const getCharacters = async function (pageId = 1) {
  let actualUrl = apiUrl + `/?page=${pageId}`;
  var apiResults = await fetch(actualUrl).then((resp) => {
    return resp.json();
  });

  const chars = apiResults.results;
  return chars;
};

export const getEntireCharactersList = async function (
  pageId = 1
): Promise<any> {
  const results = await getCharacters(pageId);
  try {
    if (results.length > 0) {
      return results.concat(await getEntireCharactersList(pageId + 1));
    } else {
      return results;
    }
  } catch (error) {}

  return results;
};
