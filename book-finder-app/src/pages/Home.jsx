import { useState } from "react";
import { searchBooks } from "../services/api";
import BookCard from "../component/Bookcard";
import Loader from "../component/Loader";

export default function Home() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query) return;
    setLoading(true);
    const data = await searchBooks(query);
    console.log(data);
    setBooks(data);
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 mb-6 animate-pulse">
        🔍 Discover Your Next Book
      </h1>

      {/* Search Box */}
      <div className="flex justify-center mb-8 gap-3">
        <input
          className="px-4 py-2 rounded-full border shadow-md w-80 focus:outline-none"
          type="text"
          placeholder="Search books..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />

        <button
          onClick={handleSearch}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-purple-400/50 hover:scale-105 transition duration-300"
        >
          Search
        </button>
      </div>

      {/* Loader */}
      {loading && <Loader />}

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.length > 0
          ? books.map((book, i) => <BookCard key={i} book={book} />)
          : !loading && (
              <p className="text-gray-500 text-center col-span-full">
                Enter a search term to find books. Try "Harry Potter" or "Science Fiction"!
              </p>
            )}
      </div>
    </div>
  );
}
