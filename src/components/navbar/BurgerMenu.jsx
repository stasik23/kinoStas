import React, { useState } from 'react';
import { Category } from './Category';

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button onClick={handleToggleMenu} className="text-xl focus:outline-none">
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                </svg>
                {isOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={handleToggleMenu}></div>
                )}
                <div
                    className={`fixed top-0 right-0 w-64 bg-white h-full shadow-lg z-50 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <Category />
                </div>
            </button>
        </div>
    );
};

export default BurgerMenu;