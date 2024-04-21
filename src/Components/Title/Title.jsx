import React, { useContext } from 'react'
import { storecontext } from '../Context/Context';

export default function Title() {
    const { selected } = useContext(storecontext);
    console.log(selected)
  return (
    <div>
    <div>{selected.title}</div>
    <div>{selected.description}</div>
    </div>
  )
}
