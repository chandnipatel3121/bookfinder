import { useNavigate } from "react-router-dom";

export default function BookCard({ book }) {
  const coverId = book.cover_i;

  return (
    <div className="backdrop-blur-lg bg-white/40 p-4 rounded-2xl shadow-lg hover:scale-105 transition duration-300">
      {coverId && (
        <img
          src={`https://covers.openlibrary.org/b/id/${coverId}-M.jpg`}
          alt="book"
          className="w-full h-40 object-cover rounded mb-3"
        />
      )}

      <h3 className="font-bold text-indigo-800 text-lg">
        <h3>{book.title}</h3>
        <p>{book.author_name?.[0] || "Unknown"}</p>
        <p>{book.first_publish_year || "N/A"}</p>
      </h3>

      <p className="text-sm text-gray-700">{book.author_name?.[0]}</p>

      <p className="text-xs text-gray-500">{book.first_publish_year}</p>
    </div>
  );
}
