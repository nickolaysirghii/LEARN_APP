import React from 'react';
import "./forthRaw.css";
import { useSelector } from 'react-redux';

const ForthRaw = () => {
  const { step_1,step_2,step_3,step_4,
    step_5,realArray,stepNow,tryNow,
    questionNow } = useSelector((state)=>state.platSlice);
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