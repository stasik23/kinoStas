import React from 'react'
import { MovieMedia } from '../../components/media/MovieMedia'
import { MovieGrid } from '../../components/grid/MovieGrid'

export const MoviePage = ({ movie }) => {
  return (
    <div>
        <MovieMedia/>
        <MovieGrid/>
    </div>
  )
}
