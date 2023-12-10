import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { arrayUnion, doc, updateDoc } from 'firebase/firestore'
import { db } from '../services/firebase';
import { UserAuth } from '../context/AuthContext';

const MovieItem = ({ movie }) => {
  const [like, setLike] = useState(false)
  const {user} = UserAuth()
  const baseImageUrl = 'https://image.tmdb.org/t/p/original/';
  const backdropUrl = movie.backdrop_path ? baseImageUrl + movie.backdrop_path : baseImageUrl + movie.poster_path;

  const markFavShow = async () => {
    const userEmail = user?.email

    if (userEmail) {
      const userDoc = doc(db, 'users', userEmail)
      setLike(!like)
      await updateDoc(userDoc, {
        favShows: arrayUnion({ ...movie }),
      })
    }else {
      alert ("Login to save a movie")
    }
  }

  return (
    <div className='relative w-[160px] sm:w-[240px] lg:w-[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2'>
      <img className="w-full h-40 block object-cover object-top" src={backdropUrl} alt={movie.title} />
      <div className='absolute top-0 w-full h-40 bg-black/80 opacity-0 hover:opacity-60'>
        <p className='whitespace-normal text-xs md:text-sm flex justify-center  items-end h-full'>{movie.title}</p>
        <p onClick={markFavShow}>{ like ? (<FaHeart size={20} className='absolute top-2 left-2 text-gray-300'/>) : (<FaRegHeart className='absolute top-2 left-2 text-gray-300'/>)}</p>
      </div>
    </div>
  )
}

export default MovieItem;