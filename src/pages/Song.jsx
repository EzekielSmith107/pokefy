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
            
            console.log(response.data.data[0])
          })
      })
  }, [pokemon])

  useEffect(() => {
    getSong()
  }, [getSong])
  
  return (
    <div>
      <h1>Song</h1>
      <div>[{track}]</div>
    </div>
  )
}

export default Song