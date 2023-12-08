import React from 'react';

const MovieItem = ({ movie }) => {
  const baseImageUrl = 'https://image.tmdb.org/t/p/original/';
  const backdropUrl = movie.backdrop_path ? baseImageUrl + movie.backdrop_path : baseImageUrl + movie.poster_path;

  return (
    <div className='relative w-[160px] sm:w-[240px] lg:w-[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2'>
      <img className="w-full h-40 block object-cover object-top" src={backdropUrl} alt={movie.title} />
    </div>
  );
};

export default MovieItem;