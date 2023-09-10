import React from 'react';
import "./firstRaw.css";
import { useDispatch } from 'react-redux';
import { setStart , setDone , setCount} from '../../../ReduxStore/Slices/timeSlice';

const FirstRaw = ({ totalTime,timeNow,startStatus }) => {
    const dispatcher = useDispatch();
    
    const showTime = ()=>{
     const a = Date();
     const hours = Number(a.slice(16 , 18));
     const minutes = Number(a.slice(19 , 21));
     const seconds = Number(a.slice(22 , 24));
      const send = [ hours, minutes, seconds];
      console.log(send)
     dispatcher(setCount(send))
     if(!localStorage.getItem("TotalEnglishTime")){
       localStorage.setItem("TotalEnglishTime",JSON.stringify(0));
     }
    
    }
    const endTime = ()=>{
        const a = Date();
        const hours = Number(a.slice(16 , 18));
        const minutes = Number(a.slice(19 , 21));
        const seconds = Number(a.slice(22 , 24));
        const time = [ hours, minutes , seconds]
        const show = [hours-timeNow[0],minutes-timeNow[1],seconds-timeNow[2]]
        console.log(time)
        console.log(show)
        if(localStorage.getItem("TotalEnglishTime")){
           localStorage.setItem("TotalEnglishTime",JSON.stringify(time));
           dispatcher(setDone(time));
           const send = {
            start: 0,
            status: false
         };
         dispatcher(setStart(send))
         dispatcher(setCount([0,0,0]))
        }
    }
   
// localStorage.clear()
  return (
    <div className='FirstRawContainer'>
        <div className='firstRawStart'>
            <div onClick={showTime} className={
                startStatus ? "startTrue" : 'firstRawButton'
            }
            
            >START</div>
            <p>D: 0 H: {totalTime[0]} , {totalTime[1]} , {totalTime[2]}</p>
        </div>
        <div className='firstRawType'>
            <div>
                <p>Correct: <span className='correct'>23434</span>/23%</p>
                ALL THE TIME
                <p>Wrong: <span className='wrong'>23434</span>/23%</p>
            </div>
            <div>
            <p>Correct: <span className='correct'>23434</span>/23%</p>
                TODAY
                <p>Wrong: <span className='wrong'>23434</span>/23%</p>
            </div>
        </div>
        <div className='firstRawTitle'>Title</div>
        <div className='firstRawType'>
            <div>
                <p>Correct: <span className='correct'>23434</span>/23%</p>
                THIS STEP
                <p>Wrong: <span className='wrong'>23434</span>/23%</p>
            </div>
            <div>
            <p>Correct: <span className='correct'>23434</span>/23%</p>
                THIS QUESTION
                <p>Wrong: <span className='wrong'>23434</span>/23%</p>
            </div>
        </div>
        <div className='firstRawStart'>
        <p>D: 0 H: {timeNow[0]} , {timeNow[1]} , {timeNow[2]}</p>
        <div onClick={endTime} className='firstRawButton'>DONE</div>
        </div>
   </div>
  )
}

export default FirstRaw