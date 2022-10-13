import React from 'react'
import Select from './Select'

const Landing = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-4 px-4 text-center'>
      <h1>Pokefy</h1>
      <p className='py-4'>Welcome to Pokefy! Here you can explore new music inspired by your favorite pokemon. Simply select a pokemon from down below and a song will be generated for you based on a variety of its characteristics. Have fun exploring!</p>
      <h2>Choose your Pokemon!</h2>
      <Select />
    </div>
  )
}

export default Landing