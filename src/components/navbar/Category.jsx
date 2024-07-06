import React, { useState } from 'react'
import useSWR from 'swr';

export const Category = () => {
    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data: movie } = useSWR('https://664859d22bb946cf2fa042e8.mockapi.io/Cougavg', fetcher);
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    };
    return (
        <div>
            {isOpen && (
                <div>
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={handleToggleMenu}
                    ></div>
                    <div className={`fixed top-0 right-0 w-96 bg-white h-full shadow-lg z-50 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}>
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-4">Категории</h2>
                            <ul>
                                {movie && movie.map((movie, index) => (
                                    <li key={index} className="mb-2">
                                        <a href={`/genre/${movie.genres}`} className="block text-black hover:bg-gray-200 p-2 rounded-lg">
                                            {movie.genres}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
