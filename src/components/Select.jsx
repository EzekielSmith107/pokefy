import React from 'react'
import SelectCard from './SelectCard'
import bulbasaur from '../images/bulbasaur.png'
import charizard from '../images/charizard.png'
import dragapult from '../images/dragapult.png'
import garchomp from '../images/garchomp.png'
import gardevoir from '../images/gardevoir.png'
import gengar from '../images/gengar.png'
import greninja from '../images/greninja.png'
import lucario from '../images/lucario.png'
import lugia from '../images/lugia.png'
import mimikyu from '../images/mimikyu.png'
import rayquaza from '../images/rayquaza.png'
import sylveon from '../images/sylveon.png'
import toxtricity from '../images/toxtricity.png'
import tyranitar from '../images/tyranitar.png'
import umbreon from '../images/umbreon.png'

const Select = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-4 grid sm:grid-cols-3 lg:grid-cols-5 gap-4'>
        <SelectCard bg={bulbasaur} alt='bulbasaur' text='Bulbasaur' answer='bulbasaur' />
        <SelectCard bg={charizard} alt='charizard' text='Charizard' />
        <SelectCard bg={dragapult} alt='dragapult' text='Dragapult' />
        <SelectCard bg={garchomp} alt='garchomp' text='Garchomp' />
        <SelectCard bg={gardevoir} alt='gardevoir' text='Gardevoir' />

        <SelectCard bg={gengar} alt='gengar' text='Gengar' />
        <SelectCard bg={greninja} alt='greninja' text='Greninja' />
        <SelectCard bg={lucario} alt='lucario' text='Lucario' />
        <SelectCard bg={lugia} alt='lugia' text='Lugia' />
        <SelectCard bg={mimikyu} alt='mimikyu' text='Mimikyu' />

        <SelectCard bg={rayquaza} alt='rayquaza' text='Rayquaza' />
        <SelectCard bg={sylveon} alt='sylveon' text='Sylveon' />
        <SelectCard bg={toxtricity} alt='toxtricity' text='Toxtricity' />
        <SelectCard bg={tyranitar} alt='tyranitar' text='Tyranitar' />
        <SelectCard bg={umbreon} alt='umbreon' text='Umbreon' />
    </div>
  )
}

export default Select