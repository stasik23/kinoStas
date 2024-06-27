import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import useSWR from 'swr'

export const MovieMedia = ({ movie }) => {
    const { id } = useParams()
    const [movies, setMovies] = useState()
    console.log(id);
    useEffect(() => {
        fetch(`https://664859d22bb946cf2fa042e8.mockapi.io/Cougavg/${id}`)
            .then(res => res.json())
            .then(res => setMovies(res))
    }, [])
    return (
        <div>
            {movies &&
                <div key={movies.id} className="bg-black text-white p-6 font-sans">
                    <div className="relative pb-56.25 overflow-hidden h-0 max-w-full bg-black">
                        <img className="absolute top-0 left-0 w-full h-full" src={movies.landImages} alt="" />
                        {/* <video className="absolute top-0 left-0 w-full h-full" controls>
                            <source src={movies.landImages} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video> */}
                    </div>
                    <div className="mt-6 flex flex-col md:flex-row items-start">
                        {/* TODO: Uncomment and use the poster image */}
                        <img src={movies.images} alt={movies.movie} className="w-36 rounded-lg mb-6 md:mb-0 md:mr-6" />
                        <div>
                            <h1 className="text-4xl font-bold mb-4">{movies.movie}</h1>
                            <div className="flex space-x-2 mb-4">
                                {movies.genres.map((genre, index) => (
                                    <span key={index} className="px-2 py-1 bg-white text-black rounded-full">{genre}</span>
                                ))}
                            </div>
                            <p className="max-w-prose text-lg">{movies.description}</p>
                            <div className="mt-4">
                                <span>{movies.year} | {movies.rating}</span>
                            </div>
                            <button className="mt-4 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-full">Add to Favourite</button>
                        </div>
                    </div>
                </div>}
        </div>
    )
};
