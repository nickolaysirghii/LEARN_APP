import React from 'react';
import "./header.css";
import { useDispatch } from 'react-redux';
import { setWorking } from '../../ReduxStore/Slices/timeSlice';

const EveryHead = ({data}) => {
 
  const dispatcher = useDispatch();
  const addWorkingArray = ()=>{
    const drama = {
      title:data.title,
      work:data.arr,
    }
    dispatcher(setWorking(drama))
  }
  const checkHistory = localStorage.getItem(`${data.title}Freequance`) ?
   JSON.parse(localStorage.getItem(`${data.title}Freequance`)) : [];

   let daysOff = 0;
   let number = 0;
  if(checkHistory.length > 0){
    checkHistory.forEach((elem) => {
      if(elem.time === 0){
        daysOff +=1
      }else{
        daysOff = 0
      }
      if(elem.day == Date().slice(8,10)){
        number = daysOff
      }
     })
   }
   
   
  return (
    <div onClick={addWorkingArray} className='frontDivs' style={{backgroundImage: data.image}}>
      {
        number > 0 && <div className='SeeIfIs'>{number}</div>
      }
    </div>
  )
}

export default EveryHead