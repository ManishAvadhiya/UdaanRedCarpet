import React from 'react'
import CardDemo from './cards-demo-1'

const Card = () => {
  return (
    <div className='flex flex-col  gap-4 sm:flex-row sm:flex-wrap m-2'> 
        <CardDemo />
        <CardDemo />
        <CardDemo />
        <CardDemo />
        <CardDemo />
        <CardDemo />
        <CardDemo />
        <CardDemo />
        <CardDemo />
    </div>
  )
}

export default Card