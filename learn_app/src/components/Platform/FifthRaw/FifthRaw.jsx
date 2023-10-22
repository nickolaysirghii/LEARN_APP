import React from 'react';
import "./fifthRaw.css";
import ForthRaw from '../ForthRaw/ForthRaw';
import Inputs from "../Inputs/Inputs"
import { useSelector  } from 'react-redux';

const FifthRaw = ({title,data}) => {
  

  const { realArray} = useSelector((state)=>state.platSlice);
   let picture = data[0].image
  if(realArray.length > 0){
  
    picture = realArray[0].image
 
    
      
    
    
  }
  return (
    <div className='fifthRawContainer'> 
     <input className='insertAnswer' type='text' placeholder='hallo' />
     <div className='belawContainer3'>
     <div className='fifthImage'>
         <div className='ShowImage' style={{backgroundImage:`${picture}`}}></div>
      </div>
     <div className='fifthImage'>
     <ForthRaw />
     </div>
     <div className='fifthImage'>
        <Inputs title={title}data={data} />
     </div>

     </div>
    </div>
  )
}

export default FifthRaw