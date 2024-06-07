import React from 'react'
import { Navbar2 } from '../navbar/Navbar2'
// import { Navbar } from '../navbar/Navbar';

export const Layout = ({ children }) => {
    return (
        <>
            <Navbar2 />
            {children}
        </>
    )
}
