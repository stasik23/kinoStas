import React from 'react'
import { useState, useEffect } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NavLink } from 'react-router-dom';
import { fetchMovies } from '../../utils/fetchMovies';
import { settings } from '../../utils/sliderSettings';
import useSWR from 'swr'

export const MovieSlider = ({ movie }) => {
  const [movies, setMovies] = useState()
    useEffect(()=>{
      fetchMovies('https://664859d22bb946cf2fa042e8.mockapi.io/Cougavg').then((res)=>{ setMovies(res) })
    }, [])
    return (
      <Slider {...settings}>
        {movies && movies.map((movie => 
          <div key={movie.id} className="relative">
            <img src={movie.landImages} alt={movie.movie} className="w-full h-screen object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6">
              <h1 className="text-4xl font-bold mb-4">{movie.movie}</h1>
              <div className="flex space-x-2 mb-4">
                {movie.genres.map((genre, index) => (
                  <span key={index} className="px-2 py-1 bg-white text-black rounded-full">{genre}</span>
                ))}
              </div>
              <div className="flex space-x-4 mb-4">
                <button className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-full flex items-center space-x-2">
                  <NavLink to={`/movie/${movie.id}`}>
                    <span>Watch Now</span>
                  </NavLink>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.752 11.168l-5.197-2.597a.75.75 0 00-1.123.667v5.524a.75.75 0 001.123.667l5.197-2.598a.75.75 0 000-1.334z" />
                  </svg>
                </button>
                <button className="px-6 py-3 border-2 border-red-600 hover:bg-red-600 rounded-full flex items-center space-x-2">
                  <span>Watch Later</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 6v6l4 2" />
                    <path d="M12 12V6m0 6l-4 2m4-8a9 9 0 110 18 9 9 0 010-18z" />
                  </svg>
                </button>
              </div>
              <p className="max-w-prose text-center">{movie.description}</p>
              <div className="mt-4">
                <span>{movie.year} | {movie.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    );
  };
  // <Slider {...settings}>
  //     {movies && movies.map((movie => 
  //       <div key={movie.id} className="relative">
  //         <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${movie.landImages})` }}>
  //           <div className="absolute inset-0 bg-black opacity-50"></div>
  //           <div className="relative container mx-auto px-6 py-12 text-white">
  //             <div className="flex flex-col items-center space-y-4">
  //               <h1 className="text-4xl font-bold">{movie.movie}</h1>
  //             </div>
  //           </div>
  //           <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  //           <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6">
  //             <h1 className="text-4xl font-bold mb-4">{movie.movie}</h1>
  //             <div className="flex space-x-2 mb-4">
  //               {movie.genres.map((genre, index) => (
  //                 <span key={index} className="px-2 py-1 bg-white text-black rounded-full">{genre}</span>
  //               ))}
  //             </div>
  //             <div className="flex space-x-4 mb-4">
  //               <button className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-full flex items-center space-x-2">
  //                 <span>Watch Now</span>
  //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
  //                   <path d="M14.752 11.168l-5.197-2.597a.75.75 0 00-1.123.667v5.524a.75.75 0 001.123.667l5.197-2.598a.75.75 0 000-1.334z" />
  //                 </svg>
  //               </button>
  //               <button className="px-6 py-3 border-2 border-red-600 hover:bg-red-600 rounded-full flex items-center space-x-2">
  //                 <span>Watch Later</span>
  //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
  //                   <path d="M12 6v6l4 2" />
  //                   <path d="M12 12V6m0 6l-4 2m4-8a9 9 0 110 18 9 9 0 010-18z" />
  //                 </svg>
  //               </button>
  //             </div>
  //             <p className="max-w-prose text-center">{movie.description}</p>
  //             <div className="mt-4">
  //               <span>{movie.year} | {movie.rating}</span>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     ))}
  //   </Slider>