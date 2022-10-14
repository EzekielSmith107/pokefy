import { React, useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

const Song = () => {
  const location = useLocation()
  let pokemon = location.state

  function getSong(characteristic) {
    axios.get(`https://api.deezer.com/search?q=track:"${characteristic}"`)
      .then((response) => {
        console.log(response)
      })
  }

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}/`)
      .then((response) => {
        let characteristic = response.data.color.name
        getSong(characteristic)
      })
  })
  
  return (
    <div>Song</div>
  )
}

export default Song