import React from 'react'
import { useState, useEffect } from 'react'
import useSWR from 'swr'

export const MovieGrid = () => {
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data:movie, error, isLoading } = useSWR('https://664859d22bb946cf2fa042e8.mockapi.io/Cougavg', fetcher)
    console.log();
  return (
    <div>
         <div className="bg-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
            {movie && movie.map(movie => (
                <div key={movie.id} className="bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg">
                    <div className="relative">
                        <img src={movie.images} alt={movie.movie} className="w-full h-auto object-cover rounded-t-lg" />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"> 
                        </div>
                    </div>
                    <div className="p-4">
                        <h3 className="text-lg font-bold mb-2 truncate">{movie.movie}</h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {movie.genres.map((genre, index) => (
                                <span key={index} className="bg-red-600 text-white px-2 py-1 rounded-full text-xs">{genre}</span>
                            ))}
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="bg-gray-700 text-white px-2 py-1 rounded-full text-xs">{movie.rating}</span>
                            <span className="bg-gray-700 text-white px-2 py-1 rounded-full text-xs">{movie.year}</span>
                        </div>
                    </div>
                </div>
            ))} 
        </div>
    </div>
  )
}
