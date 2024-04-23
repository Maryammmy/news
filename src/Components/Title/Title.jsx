import React, { useContext } from 'react'
import { storecontext } from '../Context/Context';

export default function Title() {
    const { selected } = useContext(storecontext);
    console.log(selected)
  return (
    <div className=' w-60 bg-white my-3 shadow' >
    <div className="container-fluid">
      <h3 className='fw-bolder px-2 pt-2'>أخبار مصر</h3>
     
        <div className="row py-3"  >
          <div className="col-md-5">
            <div className='w-img'>
              <img src={selected.img} alt={'Image'} />
            </div>
          </div>
          <div className="col-md-7 ">
            <button className='btn text-end but border-0'><h5>{selected.title}</h5> </button>
            <p>{selected.description}</p>
            <p>{selected.dateTime}</p>
          </div>

        </div>

      
    </div>
  </div>
  )
}
