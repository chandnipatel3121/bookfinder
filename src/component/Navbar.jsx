import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    
    <div className="relative backdrop-blur-md bg-white/30 shadow-md px-6 py-4">
      <h1 className="absolute left-6 top-4 text-xl font-bold text-indigo-700">
        📚 Book Finder
      </h1>
      <div className="flex justify-center">
        <Link
          to="/"
          className="text-gray-700 hover:text-indigo-600 font-medium"
        >
          Home
        </Link>
      </div>

    </div>
  
  );
}