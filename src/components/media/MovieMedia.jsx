import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

import ReactPlayer from 'react-player/youtube';
import useSWR from 'swr'

export const MovieMedia = ({ movie }) => {
    const { id } = useParams()
    const [movies, setMovies] = useState()
    const [playing, setPlaying] = useState(false);
    console.log(id);
    useEffect(() => {
        fetch(`https://664859d22bb946cf2fa042e8.mockapi.io/Cougavg/${id}`)
            .then(res => res.json())
            .then(res => setMovies(res))
    }, [])
    return (
        <div className="bg-black text-white p-5">
            {movies && (
                <div>
                    <div className="relative mb-5">
                        {playing ? (
                            <ReactPlayer
                                url={movies.trailerUrl}
                                playing={true}
                                controls={true}
                                width="100%"
                                height="100%"
                                className="rounded-lg"
                            />
                        ) : (
                            <>
                                <img
                                    src={movies.landImages}
                                    alt={movies.movie}
                                    className="w-full h-auto object-cover rounded-lg"
                                />
                                <button
                                    onClick={() => setPlaying(true)}
                                    className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 rounded-lg"
                                >
                                    <svg
                                        className="w-16 h-16 text-white"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-11.41v4.82a1 1 0 001.54.84l3.36-2.41a1 1 0 000-1.68l-3.36-2.41A1 1 0 009 6.59z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </>
                        )}
                    </div>
                    <div className="flex">
                        <img
                            src={movies.landImages}
                            alt={movies.movie}
                            className="w-1/3 h-auto object-cover rounded-lg"
                        />
                        <div className="ml-5">
                            <h3 className="text-3xl mb-2">{movies.movie}</h3>
                            <div className="flex flex-wrap mb-2">
                                {movies.genres.map((genre) => (
                                    <span
                                        key={genre}
                                        className="bg-gray-700 text-white rounded-full px-2 py-1 text-xs mr-2 mb-2"
                                    >
                                        {genre}
                                    </span>
                                ))}
                            </div>
                            <p className="text-sm mb-2">{movies.year}</p>
                            <p className="text-sm mb-5">{movies.description}</p>
                            <button className="bg-red-500 text-white rounded-full px-4 py-2">
                                + Add to Favourite
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
};
