import { useState } from 'react'
import imgLogo from './assets/swx-logo.webp'
import imgNave from './assets/swx-nave.webp'
import imgShield from './assets/swx-shield.webp'
import imgHull from './assets/swx-hull.webp'
import imgDmg from './assets/swx-hull2.webp'

const initialList = [
  {
    id: 1,
    shield: 4,
    hull: 4
  },
  {
    id: 2,
    shield: 4,
    hull: 4
  },
  {
    id: 3,
    shield: 4,
    hull: 4
  }
];
var navesCount = initialList.length

function HullShield({type})
{
  const [dmg, setDmg] = useState(false)

  const imgSrc = type=="shield" ? imgShield : imgHull

  function toggleDmg()
  {
    setDmg( !dmg )
  }
  return (
    <>
      <figure className='cursor-pointer' onClick={toggleDmg} >
        <img src={ !dmg ? imgSrc : imgDmg} alt={type} />
      </figure>
    </>
  )
}

function Nave({id, shields, hulls, handleDelete}) {

  var initialShieldList = []
  for(let _i=0; _i<shields; _i++)
  {
    initialShieldList.push(_i)
  }

  var initialHullList = []
  for(let _i=0; _i<hulls; _i++)
  {
    initialHullList.push(_i)
  }

  const [shieldList, setShieldList] = useState(initialShieldList)
  const [hullList, setHullList] = useState(initialHullList)

  const [_shields, setShields] = useState(shields)
  const [_hulls, setHulls] = useState(hulls)

  function redoShieldList()
  {
    let newShieldList = []
    for(let _i=0; _i<_shields; _i++)
    {
      newShieldList.push(_i)
    }
    setShieldList(newShieldList)
  }

  return (
    <>
      <li className='flex'>
        <figure className='w-1/5 p-2'>
          <img src={imgNave} alt={ "nave " + id} className='' />
          <figcaption className='text-center place-items-center'>
            <button type="button" onClick={handleDelete} className='min-w-12 rounded-lg shadow-md p-2.5 text-xl bg-black/30 text-gray-200 text-shadow cursor-pointer'>&#215;</button>
          </figcaption>
        </figure>
        <div className='playmat w-4/5 p-4 '>

          <div className='shieldsV2 mb-2 grid grid-cols-4 place-items-center'>
            {shieldList.map( (_idx) => (
              <HullShield key={id+'shield'+_idx} type="shield" />
            ))}
          </div>

          <div className='hullsV2 grid grid-cols-4 place-items-center'>
            {hullList.map( (_idx) => (
              <HullShield key={id+'hull'+_idx} type="hull" />
            ))}
          </div>

        </div>
      </li>
    </>
  )
}

function App() {
  const [naveslist, setNavesList] = useState(initialList)
  const [shield, setShield] = useState(8)
  const [hull, setHull] = useState(8)

  function handleAdd() {
    navesCount++
    const newList = naveslist.concat({id: (navesCount), shield: shield, hull: hull })

    setNavesList(newList)
    setShield(8)
    setHull(8)
  }

  function handleDel(id)
  {
    setNavesList( naveslist => naveslist.filter( (item) => item.id!==id ) )
  }

  return (
    <>
      <h1 className=" p-2 text-3xl font-medium dark:text-gray-200 text-shadow">
        <img src={imgLogo} alt="Navecitas" className='max-w-1/2' />
      </h1>

      <ul>
        { naveslist.map( (item) => (
          <Nave key={'nave-'+item.id} id={item.id} shields={item.shield} hulls={item.hull} handleDelete={ () => handleDel(item.id) } />
        ))}
      </ul>

      <section className='grid grid-cols-3 gap-5 mt-12 mb-5'>
        <div className='px-1'>
          <label htmlFor="inputShield" className='block text-shadow text-gray-300'>Shields</label>
          <input id="inputShield" name="shield" type="number" min="0" value={shield} onChange={(ev) => setShield(ev.target.value)} className='max-w-full rounded-md bg-slate-900 p-2 text-lg' />
        </div>

        <div className='px-1'>
          <label htmlFor="inputHull" className='block text-shadow text-gray-300'>Hull</label>
          <input name="hull" type="number" min="0" value={hull} onChange={(ev) => setHull(ev.target.value)} className='max-w-full rounded-md bg-slate-900 p-2 text-lg' />
        </div>

        <div className='flex place-items-end'>
          <button type="button" className='shadow-lg rounded-md p-2.5 px-4 text-lg text-shadow bg-black/30 text-gray-300' onClick={handleAdd}>Agregar</button>
        </div>

      </section>
    </>
  )
}

export default App
