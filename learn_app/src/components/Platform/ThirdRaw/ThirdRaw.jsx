import React from 'react';
import "./thirdRaw.css";
import { useSelector } from 'react-redux';


const ThirdRaw = ({data}) => {
  const {realArray } = useSelector((state)=>state.platSlice);
  const { title , question } = realArray[0] ? realArray[0] : data[0] ;
  
    return (
      <div className='thirdRawContainer'>
        <p>{title}</p>
          {question}
          </div>
    )

  
}

export default ThirdRaw