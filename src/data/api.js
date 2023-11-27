import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/todos/1";

// const username = "salam";
// const password = "salama32";
const options = {
  url: BASE_URL,
  params: {
    maxResults: "50",
  },

  headers: {
    "Content-Type": "application/json",
  },
  body: { phone_number: "1234", password: "salam" },
};

export const api = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
