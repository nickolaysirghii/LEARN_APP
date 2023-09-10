import React from 'react';
import "./fifthRaw.css";
import ForthRaw from '../ForthRaw/ForthRaw';
import Inputs from "../Inputs/Inputs"

const FifthRaw = () => {
  return (
    <div className='fifthRawContainer'> 
     <input className='insertAnswer' type='text' placeholder='hallo' />
     <div className='belawContainer3'>
     <div className='fifthImage'>
      <div className='ShowImage'></div>
     </div>
     <div className='fifthImage'>
     <ForthRaw />
     </div>
     <div className='fifthImage'>
        <Inputs />
     </div>

     </div>
    </div>
  )
}

export default FifthRaw