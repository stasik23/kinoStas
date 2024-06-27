import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux';
import useSWR from 'swr'

export const RecentlySlider = () => {
    // const recentlyUpdated = useSelector(state => state.data.recentlyUpdated);
    
    return (
        <div className="recently-slider">
            <h2 className="text-white text-2xl mb-4">Recently Updated</h2>
            <div className="flex space-x-4 overflow-x-auto">
                {/* {recentlyUpdated.map(movie => (
                    <div key={movie.id} className="recently-updated-item">
                        <img src={movie.images} alt={movie.movie} className="w-44 h-64 object-cover rounded" />
                        <p className="text-white text-center mt-2">{movie.movie}</p>
                        <p className="text-gray-400 text-center text-sm">{`Series/S ${movie.season || 1} / EP ${movie.episode || 1}`}</p>
                        <p className="text-gray-400 text-center text-sm">{new Date(movie.createdAt).toLocaleDateString()}</p>
                    </div>
                ))} */}
            </div>
        </div>
    )
}
