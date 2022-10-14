import { React, useEffect, useState } from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

const Song = () => {
  const location = useLocation()
  let pokemon = location.state

  const [ track, setTrack ] = useState([]);

  //* Stack overflow: https://stackoverflow.com/questions/53070970/infinite-loop-in-useeffect

  function getSong(characteristic) {
    axios.get(`https://api.deezer.com/search?q=track:"${characteristic}"`)
      .then((response) => {
        setTrack(response.data)
        console.log(response.data)
      })
  }

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}/`)
      .then((response) => {
        let characteristic = response.data.color.name
        axios.get(`https://api.deezer.com/search?q=track:"${characteristic}"`)
          .then((response) => {
            setTrack(response.data)
            console.log(response.data)
      })
      }, [])
  })
  
  return (
    <div>Song</div>
  )
}

export default Song