import React from 'react'
import { NavLink } from 'react-router-dom'

export const Inprogress = () => {
  return (
    <div className='inline-flex items-baseline space-x-4 text-2xl'>
        <h1>This page in progress</h1>
        <p>pls return to main</p>
        <NavLink to="/">Main</NavLink>
    </div>
  )
}
