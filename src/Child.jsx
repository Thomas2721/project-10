import React, { useContext } from 'react'
import { NameContext } from './Parent'
import './index.css'

const Child = () => {
  const name = useContext(NameContext);
  return (
    <div className='box'>
      <h1>Child div</h1>
        <h2>Good bye: {name}</h2>
    </div>
  )
}

export default Child