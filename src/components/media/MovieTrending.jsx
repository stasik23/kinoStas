import React, { useState } from 'react';
import useSWR from 'swr';
import Slider from 'react-slick';
import ReactPlayer from 'react-player';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { trendSettings } from '../../utils/trendingSliderSettings';
import { TbPlayerPlayFilled } from "react-icons/tb";

export const MovieTrending = () => {
    const fetcher = (...args) => fetch(...args).then(res => res.json());
    const { data: movies } = useSWR('https://664859d22bb946cf2fa042e8.mockapi.io/Cougavg', fetcher);
    const [playingMovie, setPlayingMovie] = useState();

    const handlePlay = (movie) => {
        setPlayingMovie(movie);
    };

    return (
        <div className="bg-black p-4">
            <h2 className="text-white text-xl font-bold mb-4">Trending</h2>
            <Slider {...trendSettings}>
                {movies &&
                    movies.map(movie => (
                        <div key={movie.id} className="px-2">
                            <div className="bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg">
                                <div className="relative">
                                    <img 
                                        src={movie.landImages} 
                                        alt={movie.movie} 
                                        className="w-full h-300 object-cover rounded-t-lg" 
                                    />
                                    <button 
                                        onClick={() => handlePlay(movie)}
                                        className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                        <span className="bg-white text-black text-sm font-semibold px-2 py-1 rounded"><TbPlayerPlayFilled /></span>
                                    </button>
                                    <div className="absolute top-2 left-2 bg-gray-800 bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                                        {movie.duration}
                                    </div>
                                    <div className="absolute top-2 right-2 bg-gray-800 bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                                        {movie.rating}
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-bold mb-2 truncate">{movie.movie}</h3>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {movie.genres.map((genre, index) => (
                                            <span key={index} className="bg-red-600 text-white px-2 py-1 rounded-full text-xs">
                                                {genre}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </Slider>

            {playingMovie && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <div className="relative bg-black p-4 rounded-lg">
                        <button 
                            onClick={() => setPlayingMovie(null)}
                            className="absolute top-2 right-2 text-white text-xl"
                        >
                            &times;
                        </button>
                        <ReactPlayer 
                            url={playingMovie.trailerUrl} 
                            playing 
                            controls 
                            width="90vw" 
                            height="90vh"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};