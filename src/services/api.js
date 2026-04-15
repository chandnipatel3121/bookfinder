import axios from "axios";

export const searchBooks = async (query) => {
  try {
    const res = await axios.get(
      `https://openlibrary.org/search.json?q=${query}`
    );
    return res.data.docs;
  } catch (err) {
    console.error("API Error:", err);
    return [];
  }
};