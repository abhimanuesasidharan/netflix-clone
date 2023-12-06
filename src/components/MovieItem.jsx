import React from 'react'
import { createImageUrl } from '../services/movieServices'

const MovieItem = ({ movie }) => {
    const { title, backdrop_path } = movie
  return (
    <div className='relative w-[168px] sm:w-[200px] md:w-[240px] inline-block rounded-lg overflow-hidden cursor-pointer m-2'>
        <img src={createImageUrl(backdrop_path, "w-500")} alt={title} />
    </div>
  )
}

export default MovieItem