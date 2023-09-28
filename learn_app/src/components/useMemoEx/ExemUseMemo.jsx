import React from 'react';
import { useMemo } from 'react';
import { useState } from 'react';
import "./usememoex.css";

const ExemUseMemo = () => {
    const [count , setCount] = useState(0);

    const [ttt , setTTT] = useState(false);
    const showIt = ()=>{
        console.log("update")
      
    }
    
   useMemo(showIt , [ttt]);
   
    
    const prevent = () =>{
      const b = count + 1  
      if(count >= 2 && count <= 5){
        setTTT(true)
      }else{
        setTTT(false)
      }
     setCount(b);
    }
    // const look = useMemo(prevent , [])
    
  return (
    <div className='useMemoExemple'>
        
        <button onClick={prevent}>change</button>
        <div>{count}</div>
        

    </div>
  )
}

export default ExemUseMemo