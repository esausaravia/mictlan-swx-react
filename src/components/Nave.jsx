import imgNave from '../assets/swx-nave.webp'
import HullShield from './HullShield'


const Nave = ({id, shields, hulls, handleDelete}) => {

  const shieldList = []
  const hullList = []

  for(let _i=0; _i<shields; _i++)
  {
    shieldList.push( <HullShield key={id+'shield'+_i} type="shield" /> )
  }

  for(let _i=0; _i<hulls; _i++)
  {
    hullList.push( <HullShield key={id+'hull'+_i} type="hull" /> )
  }

  return (
    <div className='nave flex'>

      <figure className='w-1/5 p-2'>
        <img src={imgNave} alt={ "nave " + id} className='' />
        <figcaption className='text-center place-items-center'>
          <button type="button" onClick={handleDelete} className='min-w-12 rounded-lg shadow-md p-2.5 text-xl bg-black/30 text-gray-200 text-shadow cursor-pointer'>&#215;</button>
        </figcaption>
      </figure>

      <div className='playmat w-4/5 p-4 '>

        <div className='shields-list mb-2 grid grid-cols-4 place-items-center'>
          { shieldList }
        </div>

        <div className='hulls-list grid grid-cols-4 place-items-center'>
          { hullList }
        </div>

      </div>
    </div>
  )
}

export default Nave