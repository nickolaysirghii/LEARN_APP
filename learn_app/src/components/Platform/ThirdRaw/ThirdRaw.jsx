import React from 'react';
import "./thirdRaw.css";
import { useSelector } from 'react-redux';
import { exempleArray } from '../../../data/platformExemple';

const ThirdRaw = () => {
  const {realArray,stepNow,tryNow,
    questionNow } = useSelector((state)=>state.platSlice);
  const { title , question } = realArray[0] ? realArray[0] : exempleArray[0] ;
  
  return (
    <div className='thirdRawContainer'>
      <p>{title}/{stepNow}/{tryNow}/<span>{questionNow}</span></p>
        {question}
        </div>
  )
}

export default ThirdRaw