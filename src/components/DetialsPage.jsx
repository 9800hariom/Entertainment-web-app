import React from 'react';
import { useLocation } from 'react-router-dom';

const DetailsPage = () => {
    const location = useLocation();
    const movie = location.state?.movie;

    return (
        <div style={{ marginLeft:'100px', width: '30%', height: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#000', color: '#fff' }}>
            <div style={{ width: '100%', position: 'relative' }}>
                <img 
                    src={movie?.poster_path 
                        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` 
                        : "https://via.placeholder.com/500x750?text=No+Image+Available"} 
                    alt={movie?.original_title || 'Movie Poster'} 
                    style={{ width: '100%', height: 'auto', borderRadius: '10px', boxShadow: 'rgba(0, 0, 0, 0.86) 0px 22px 40px 6px' }} 
                />
            </div>
            <div style={{ marginTop: '20px', textAlign: 'center', color:'red' }}>
                <h1 style={{ fontSize: '2.5rem', margin: '0.5rem 0' }}>{movie?.original_title || 'Movie Title'}</h1>
                <p style={{ fontSize: '1.2rem', fontStyle: 'italic' }}>{movie?.tagline || 'Movie Tagline'}</p>
                <div style={{ margin: '1rem 0' }}>
                    <span style={{ fontSize: '1.5rem' }}>{movie?.vote_average || 'N/A'} <i className="fas fa-star" /></span>
                    <span style={{ marginLeft: '1rem' }}>({movie?.vote_count || 0} votes)</span>
                </div>
                <div style={{ margin: '0.5rem 0' }}>{movie?.runtime ? `${movie.runtime} mins` : 'Runtime: N/A'}</div>
                <div style={{ margin: '0.5rem 0' }}>{movie?.release_date ? `Release date: ${movie.release_date}` : 'Release Date: N/A'}</div>
                <div style={{ margin: '1.25rem 0' }}>
                    {movie?.genres?.map(genre => (
                        <span key={genre.id} style={{ padding: '.5rem', border: '2px solid white', borderRadius: '20px', marginRight: '1rem' }}>
                            {genre.name}
                        </span>
                    ))}
                </div>
                <div style={{ margin: '2rem 0', fontSize: '1.5rem', fontWeight: '600' }}>Synopsis</div>
                <div style={{ marginBottom: '2rem' }}>{movie?.overview || 'No synopsis available.'}</div>
            </div>
        </div>
    );
}

export default DetailsPage;