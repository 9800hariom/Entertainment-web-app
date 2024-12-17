import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Trending = () => {
  const navigate=useNavigate();
  const [moviedata, setmoviedata] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const handlecard=(movie)=>{
    navigate(`/movie/${movie.id}`,{state:{movie}})
    console.log(movie)  }
  const url = "https://api.themoviedb.org/3/trending/all/day?language=en-US";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNzk2YzRiZjVhODBiNzBjNzRkMzZjNGFiNDYxNWY2YiIsIm5iZiI6MTczMzAyOTgxMy44NzUsInN1YiI6IjY3NGJlZmI1OTcyY2JlOTJhNjY0YzYwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._wwmNb7qI-M-vymbc2RFfQnWHLDa57AO5IffVtw0Vjs", // Replace with your actual API key
    },
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setmoviedata(data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  if (loading) return <div className="text-center text-white text-xl mt-8">Loading...</div>;
  if (error) return <div className="text-center text-red-500 text-xl mt-8">{error}</div>;

  return (
    <div className="p-6">
      
      <h2 className="text-white  font-semibold text-5xl mb-7">Trending Now</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {moviedata.map((movie) => (
          <div
            key={movie.id}
            
            className="bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition transform duration-200"
          onClick={()=>{handlecard(movie)}}>
            <img
              className="w-full h-[300px] object-cover"
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : "https://via.placeholder.com/500x750?text=No+Image+Available"
              }
              alt={movie.title || movie.name || "Trending Movie"}
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
