import React from 'react'
import { useState, useEffect } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const MovieCard = ({ movie }) => {
    const [movies, setMovies] = useState()
    useEffect(() => {
        fetch('https://664859d22bb946cf2fa042e8.mockapi.io/Cougavg')
            .then(res => res.json())
            .then(res => setMovies(res));
    }, [])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true
    }; 
    //TODO Do landscape-orientation for images
    return (
        <>
            <Slider {...settings}>
                {movies && movies.map(movie => <div>
                    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${movie.images})` }}>
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className="relative container mx-auto px-6 py-12 text-white">
                            <div className="flex flex-col items-center space-y-4">
                                <h1 className="text-4xl font-bold">{movie.titles}</h1>
                                <div className="flex space-x-2">
                                    <span className="px-2 py-1 bg-white text-black rounded-full">{movie.genres}</span>
                                </div>
                                <div className="flex space-x-4">
                                    <button className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-full flex items-center space-x-2">
                                        <span>Watch Now</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-5.197-2.597a.75.75 0 00-1.123.667v5.524a.75.75 0 001.123.667l5.197-2.598a.75.75 0 000-1.333z" />
                                        </svg>
                                    </button>
                                    <button className="px-4 py-2 border-2 border-red-600 hover:bg-red-600 rounded-full flex items-center space-x-2">
                                        <span>Watch Later</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12V6m0 6l-4 2m4-8a9 9 0 110 18 9 9 0 010-18z" />
                                        </svg>
                                    </button>
                                </div>
                                <p className="mt-4">{movie.description}</p>
                            </div>
                        </div>
                    </div>
                </ div>

                )}
            </Slider>
        </>

    )
}
