import React from 'react'
import MoviesGrid from '../components/MoviesGrid'
import Search from '../components/Search'
import Favorites from '../components/Favorites'

const LandingPage = () => {

  return (

    <div>
      <Search />
      <MoviesGrid />
    </div>
  )
}

export default LandingPage