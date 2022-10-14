import React from 'react'
import { useLocation } from 'react-router-dom'

const Song = () => {
  const location = useLocation()
  console.log(location)
  
  return (
    <div>Song</div>
  )
}

export default Song