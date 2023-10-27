import React from 'react';
import "./forthRaw.css";
import { useSelector, useDispatch } from 'react-redux';
import { setRightElement } from '../../../ReduxStore/Slices/platformSlice';

const ForthRaw = () => {
  const dispatcher = useDispatch();
  const { realArray } = useSelector((state)=>state.platSlice);
  const sendTheNew = (ff)=>{
    dispatcher(setRightElement(ff))
  }
  return (
    <div className='forthRawContainer'>
        {
         realArray.length > 0 && realArray.map((elem , idx)=>{
                return (
                 <div key={idx} className={elem.ourAnswer === "" ? "hiddenAnswer" : 'innerOverflow'}>
                  
                 <div className='rightButton'>
                 <div onClick={()=>sendTheNew(elem.id)} className='TheButton'>
                  <div  className='ChangeButton'>{elem.id}</div>
                 </div>
                 <p>{elem.answer}</p>
                 <a href={`https://translate.google.com/?sl=en&tl=ru&text=${elem.answer}&op=translate`} target='_blank' className={elem.ourAnswer === elem.answer ?
                   "TheAnswerWrong" : 'TheAnswer'
                 }>{elem.ourAnswer}</a>
                 </div>
                </div>

                )
                
            }
             
            )
        }
        
         
        
        </div>
  )
}

export default ForthRaw