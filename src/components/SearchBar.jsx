import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  const [text, setText] = useState('');
  const [searchMovie, setSearchMovie] = useState([]);

  const searchFetch = async (query) => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=d796c4bf5a80b70c74d36c4ab4615f6b&query=${query}`);
    const data = await response.json();
    setSearchMovie(data.results);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (text.trim()) {
      searchFetch(text.trim());
      // setText(''); // Clear the input after search
    }
  };

  return (
    <>
      <form onSubmit={handleSearch} className="flex items-center bg-primary-light rounded-md px-3 py-7 shadow-sm  ">
        <FiSearch className="text-secondary mr-2 w-90 h-90" />
        <input
          type="text"
          placeholder="Search for movies or TV series"
          className="flex-1 bg-transparent text-secondary focus:outline-none w-50 "
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </form>
      <div className="p-4 flex-wrap">
        <h2 className="text-white text-5xl mb-7">Search Results</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {searchMovie.map((movie) => (
            <li key={movie?.id} className="bg-gray-600 rounded shadow-md p-4 hover:bg-gray-700 transition duration-200">
              <img
                className="h-400 w-full object-cover rounded"
                src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                alt={movie?.title}
              />
              <div className="p-4 text-white">
              <h3 className="text-lg font-semibold truncate">
                {movie.title || movie.name || "Untitled"}
              </h3>
              <p className="text-gray-400 text-sm">
                Release Date: {movie.release_date || movie.first_air_date || "N/A"}
              </p>
              <p className="text-gray-400 text-sm">Rating: {movie.vote_average || "N/A"}</p>
            </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SearchBar;