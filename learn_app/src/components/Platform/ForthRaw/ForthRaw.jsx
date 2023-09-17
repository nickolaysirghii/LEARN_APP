import React from 'react';
import "./forthRaw.css";
import { useSelector } from 'react-redux';

const ForthRaw = () => {
  const { realArray } = useSelector((state)=>state.platSlice);
  return (
    <div className='forthRawContainer'>
        {
         realArray.length > 0 && realArray.map((elem , idx)=>{
                return (
                 <div key={idx} className='innerOverflow'>
                 <p>{elem.answer}</p>
                 <p className={elem.ourAnswer === elem.answer ?
                   "TheAnswerWrong" : 'TheAnswer'
                 }>{elem.ourAnswer}</p>
                </div>

                )
                
            }
             
            )
        }
        
         
        
        </div>
  )
}

export default ForthRaw