import imgShield from '../assets/swx-shield.webp'
import imgHull from '../assets/swx-hull.webp'
import imgDmg from '../assets/swx-hull2.webp'
import { useState } from 'react'


const HullShield = ({type="shield"}) => {

  const imgActive = type==='shield' ? imgShield : imgHull

  const [dmg, setDmg] = useState(false)

  const toggleDmg = () => {
    setDmg( !dmg )
  }

  return (
    <figure className='cursor-pointer' onClick={toggleDmg} >
      <img src={ !dmg ? imgActive : imgDmg } alt={type} />
    </figure>
  )
}

export default HullShield