import React from 'react'
import { useState, useEffect } from 'react'
import useSWR from 'swr'

export const MovieGrid = () => {
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data:movie, error, isLoading } = useSWR('https://664859d22bb946cf2fa042e8.mockapi.io/Cougavg', fetcher)
    console.log();
  return (
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {movie && movie.map((movie) => (
                <div key={movie.id} className="bg-black text-white p-6 font-sans">
                    <div className="relative pb-56.25 overflow-hidden h-0 max-w-full bg-black">
                        <images src={movie.images} className="absolute top-0 left-0 w-full h-full">
                        </images>
                    </div>
                    <div className="mt-6 flex flex-col md:flex-row items-start">
                        {/* TODO: Uncomment and use the poster image */}
                        <img src={movie.posterUrl} alt={movie.movie} className="w-36 rounded-lg mb-6 md:mb-0 md:mr-6" />
                        <div>
                            <h1 className="text-4xl font-bold mb-4">{movie.movie}</h1>
                            <div className="flex space-x-2 mb-4">
                                {movie.genres.map((genre, index) => (
                                    <span key={index} className="px-2 py-1 bg-white text-black rounded-full">{genre}</span>
                                ))}
                            </div>
                            <p className="max-w-prose text-lg">{movie.description}</p>
                            <div className="mt-4">
                                <span>{movie.year} | {movie.rating}</span>
                            </div>
                            <button className="mt-4 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-full">Add to Favourite</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
