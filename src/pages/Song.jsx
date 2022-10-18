import { React, useEffect, useState, useCallback } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

const Song = () => {
  const location = useLocation()
  let pokemon = location.state

  const [ track, setTrack ] = useState([]);

  const getSong = useCallback(async () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}/`)
      .then((response) => {
        let characteristic = response.data.color.name
        axios.get(`https://api.deezer.com/search?q=track:"${characteristic}"`)
          .then((response) => {
            let info = []
            info.push(response.data.data[0].album.cover)
            info.push(response.data.data[0].title)
            info.push(response.data.data[0].preview)
            setTrack(info)
          })
      })
  }, [pokemon])

  useEffect(() => {
    getSong()
  }, [getSong])
  
  return (
    <div>
      <h1>Song</h1>
      <h3>{track[1]}</h3>
      <img src={track[0]} alt='album cover'></img>
      <audio controls src={track[2]} typeof='audio/mp3'>Browser does not support.</audio>
    </div>
  )
}

export default Song