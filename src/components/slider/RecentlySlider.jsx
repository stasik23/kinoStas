import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux';
import useSWR from 'swr'

export const RecentlySlider = ({ movie }) => {
    // const recentlyUpdated = useSelector(state => state.data.recentlyUpdated);

    return (
        <>
            {movie && movie.map((movie => {
                <div className="bg-black text-white p-5">
                    <h2 className="text-2xl mb-4">Recently Updated</h2>
                    <div className="flex items-center">
                        {movie && movie.map((movie) => (
                            <div key={movie.id} className="mr-4 text-center">
                                <img className="w-56 h-80 rounded-lg" src={movie.landImages} alt={movie.movie} />
                                <div className="mt-2">
                                    <h3 className="text-lg">{movie.movie}</h3>
                                    <p className="text-sm">{movie.episode}<br />{movie.date}</p>
                                </div>
                            </div>
                        ))}
                        <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center cursor-pointer">
                            <img src="/path/to/your/arrow/icon.png" alt="Arrow" className="w-5 h-5" />
                        </div>
                    </div>
                </div>
            }))}
        </>


    )
}
