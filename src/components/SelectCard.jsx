import React from 'react'

const SelectCard = (props) => {
  const getSong = (e) => {
    console.log(e.target.firstChild.firstChild)
  }
  
  return (
    <button className='relative cursor-pointer' onClick={getSong} >
        <img className='w-full h-full object-cover' src={props.bg} alt={props.alt} />
        <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'  >
            <p className='left-4 bottom-4 text-2xl font-bold text-white absolute'>{props.text}</p>
        </div>
    </button>
  )
}

export default SelectCard