import React,{ useState } from 'react'
import "./newPlatform.css";
import Inputs from '../Platform/Inputs/Inputs';
import ForthRaw from '../Platform/ForthRaw/ForthRaw';

const NewPlatform = ({title, data , picture}) => {
    const [count , setCount] = useState("-500px");
    const hide = ()=>{
        if(count === "-500px"){
            setCount("0")
        }else{
            setCount("-500px")
        }
    }
  return (
    <div className='ffiff'>
        
       <div className='ImmmputContainer' style={{right: count}}>
          <div onClick={hide} className='linkToPull'></div>
          <Inputs title={title} data={data}/>
       </div>
       <ForthRaw/>
    </div>
    
  )
}

export default NewPlatform