import React, { useContext } from 'react'
import { MovieSlider } from '../../components/slider/MovieSlider'
import { CounterContext } from '../../provider/Counter'
import { RecentlySlider } from '../../components/slider/RecentlySlider'
import { MovieGrid } from '../../components/grid/MovieGrid'
import { MovieTrending } from '../../components/media/MovieTrending'

export const MainPage = () => {
  const {increment} = useContext(CounterContext)
  return (
    <div>
        <MovieSlider/>
        <RecentlySlider/>
        <MovieTrending/>
        <MovieGrid/>
    </div>
  )
}
