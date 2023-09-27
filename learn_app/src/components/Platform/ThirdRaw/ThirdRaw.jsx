import React from 'react';
import "./thirdRaw.css";
import { useSelector } from 'react-redux';


const ThirdRaw = ({title2,data}) => {

  const {realArray } = useSelector((state)=>state.platSlice);
  const { answer , title , question } = realArray[0] ? realArray[0] : data[0] ;
  
    return (
      <div className='thirdRawContainer'>
        <a href={`https://translate.google.com/?sl=en&tl=ru&text=${answer}&op=translate`}target="_blank">{title}</a>
          <p className='TheQuestionFor'>{question}</p>
          </div>
    )

  
}

export default ThirdRaw