import React from 'react';
import "./fifthRaw.css";
import ForthRaw from '../ForthRaw/ForthRaw';
import Inputs from "../Inputs/Inputs"
import { useSelector  } from 'react-redux';
import NewPlatform from '../../NewPlatform/NewPlatform';


const FifthRaw = ({title,data}) => {
  

  const { realArray} = useSelector((state)=>state.platSlice);
   let picture = data[0].image
  if(realArray.length > 0){
   if(title = "Countries"){
    picture = realArray[0].image
   }else{
    picture = realArray[0].image
   }
    
   
    }
  return (
    <div className='fifthRawContainer'> 
     <input className='insertAnswer' type='text' placeholder='hallo' />
     <NewPlatform picture={picture} title={title} data={data}/>

     
    
     
    </div>
  )
}

export default FifthRaw