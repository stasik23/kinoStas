import React from 'react'
import './App.css'
import { MovieGrid } from './components/grid/MovieGrid'
import { RecentlySlider } from './components/slider/RecentlySlider'

function App() {
  return (
    <div className="bg-black min-h-screen p-8">
      <RecentlySlider />
      <MovieGrid />
    </div>
  )
}

export default App
