import React from 'react'

const MovieItem = ({ movie }) => {
  const baseImageUrl = 'https://image.tmdb.org/t/p/original/';
  const backdropUrl = baseImageUrl + movie.backdrop_path;

  return (
    <div className='relative w-[160px] sm:w-[240px] lg:w-[280px] inline-block rounded-lg cursor-pointer m-10'>
      <img src={backdropUrl} alt={movie.title} />
    </div>
  );
};

export default MovieItem;