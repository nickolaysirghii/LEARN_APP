import React,{useEffect} from 'react';
import "./thirdRaw.css";
import { useSelector } from 'react-redux';


const ThirdRaw = ({title2,data}) => {
  // useEffect(()=>{
  //   const ddd = Date().slice(8,10);
  //   console.log(title2)
  //   console.log(ddd)
    
  //  },[])
  const {realArray } = useSelector((state)=>state.platSlice);
  const { title , question } = realArray[0] ? realArray[0] : data[0] ;
  
    return (
      <div className='thirdRawContainer'>
        <p>{title}</p>
          <p className='TheQuestionFor'>{question}</p>
          </div>
    )

  
}

export default ThirdRaw