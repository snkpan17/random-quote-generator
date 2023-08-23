import axios from "axios";

const URL = 'http://localhost:3000/quote'

export const fetchQuoteAuthor = async () => {
  try {
    const res = await axios.get(URL);
    return res.data;
  } catch (err) {
    console.error(err);
    throw new Error("API call failed");
  }
}

