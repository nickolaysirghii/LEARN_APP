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
                 <div key={idx} className={elem.ourAnswer === "" ? "hiddenAnswer" : 'innerOverflow'}>
                 <p>{elem.answer}</p>
                 <a href={`https://translate.google.com/?sl=en&tl=ru&text=${elem.answer}&op=translate`} target='_blank' className={elem.ourAnswer === elem.answer ?
                   "TheAnswerWrong" : 'TheAnswer'
                 }>{elem.ourAnswer}</a>
                </div>

                )
                
            }
             
            )
        }
        
         
        
        </div>
  )
}

export default ForthRaw