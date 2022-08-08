import axios from "axios";

const instance = axios.create({
  baseURL: "https://deckofcardsapi.com/api/deck",
  timeout: 1000,
  headers: {
    "Content-type": "application/json",
  },
});

export default instance;
