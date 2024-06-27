import React, { useContext } from 'react'
import { MovieMedia } from '../../components/media/MovieMedia'
import { MovieGrid } from '../../components/grid/MovieGrid'
import { CounterContext } from '../../provider/Counter'
import { MovieTrending } from '../../components/media/MovieTrending'

export const MoviePage = ({ movie }) => {
  const {counter} = useContext(CounterContext)
  return (
    <div>
      {/* <div>{counter}</div> */}
        <MovieMedia/>
        <MovieTrending/>
        <MovieGrid/>
    </div>
  )
}
