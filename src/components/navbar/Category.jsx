import React, { useState } from 'react'
import useSWR from 'swr';

export const Category = ({ movie }) => {
    const fetcher = (...args) => fetch(...args).then(res => res.json());
    const { data: movies } = useSWR('https://664859d22bb946cf2fa042e8.mockapi.io/Cougavg', fetcher);
    const [categories, setCategories] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsOpen(!isOpen);
      };
  return (
    <div>
      <button onClick={handleToggleMenu} className="fixed top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg z-50">
        Категории
      </button>
      {isOpen && (
        <div>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={handleToggleMenu}
          ></div>
          <div className="fixed top-0 right-0 w-64 bg-white h-full shadow-lg z-50 transition-transform transform translate-x-0">
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-4">Категории</h2>
              <ul>
                {movies.map((movie) => (
                  <li key={movie.id} className="mb-2">
                    <button className="w-full text-left text-black hover:bg-gray-200 p-2 rounded-lg">
                      {movie.movie}
                    </button>
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
