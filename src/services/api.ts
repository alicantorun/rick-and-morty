import axios from "axios";

export const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character",
  //   headers: { "X-ListenAPI-Key": env.LISTEN_NOTES_API_TOKEN },
});

// export const apiFirebase = axios.create({
//   baseURL: env.FIREBASE_API_BASE_URL,
// });
