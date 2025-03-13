import { useRef, useState } from 'react'
import './App.css'
import imgLogo from './assets/swx-logo.webp'
import Nave from './components/Nave';

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
let navesCount = initialList.length

function App() {
  const [naveslist, setNavesList] = useState(initialList)

  const shieldInput = useRef(null)
  const hullInput = useRef(null)

  function handleAdd() {
    navesCount++
    const newList = naveslist.concat({id: (navesCount), shield: shieldInput.current.value, hull: hullInput.current.value })

    setNavesList(newList)
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
          <input id="inputShield" name="shield" type="number" min="0" className='max-w-full rounded-md bg-slate-900 p-2 text-lg'
            ref={shieldInput}
          />
        </div>

        <div className='px-1'>
          <label htmlFor="inputHull" className='block text-shadow text-gray-300'>Hull</label>
          <input name="hull" type="number" min="0" className='max-w-full rounded-md bg-slate-900 p-2 text-lg'
            ref={hullInput}
          />
        </div>

        <div className='flex place-items-end'>
          <button type="button" className='shadow-lg rounded-md p-2.5 px-4 text-lg text-shadow bg-black/30 text-gray-300' onClick={handleAdd}>Agregar</button>
        </div>

      </section>
    </>
  )
}

export default App
