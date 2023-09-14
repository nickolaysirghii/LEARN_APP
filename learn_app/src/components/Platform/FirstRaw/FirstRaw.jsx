import React from 'react';
import "./firstRaw.css";
import { useDispatch ,useSelector} from 'react-redux';
import { endToday } from '../../../ReduxStore/Slices/initialStates';
import { setStart , setDone , setCount , lookTimeNow} from '../../../ReduxStore/Slices/timeSlice';
import { setRA } from '../../../ReduxStore/Slices/platformSlice';
import { exempleArray } from '../../../data/platformExemple';


const FirstRaw = ({title,lookTime,totalTime,timeNow,startStatus }) => {
    const  shuffleArray = (arr)=> {
        const shuffledArray = [...arr]; 
        for (let i = shuffledArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1)); 
      
          [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
        };
    const { SP1,SP2,SP3,VA1} = useSelector((state)=>state.platSlice);
    const dispatcher = useDispatch();
    const seconds = totalTime % 60;
    const minutes = (totalTime / 60) % 60;
    const hours = ((totalTime/60)/60) % 24;
    const days = ((totalTime/60)/60)/24;

    const secondsNow = lookTime % 60;
    const minutesNow = (lookTime / 60) % 60;
    const hoursNow = ((lookTime/60)/60) % 24;
    
    const showTime = ()=>{
     const a = Date();
    const send = [ Number(a.slice(16 , 18)), Number(a.slice(19 , 21)), Number(a.slice(22 , 24))];
    const total = ((send[0]*60)*60)+(send[1]*60)+(send[2]);
     dispatcher(setCount(total));
     dispatcher(setStart(true));
     dispatcher(lookTimeNow(0))
     if(!localStorage.getItem("TotalEnglishTime")){
       localStorage.setItem("TotalEnglishTime",JSON.stringify(0));
     }
     //==============================================================
     if(VA1.length === 0){
     const l1 = Math.ceil(((exempleArray.slice(SP3,exempleArray.length).length)/100)*20)+SP3;
     const a1 = shuffleArray([...exempleArray.slice(0, SP1),...shuffleArray(exempleArray.slice(SP3,l1)).slice(0,SP1)]);
     //============================
     const l2 = Math.ceil((exempleArray.length-SP3) / 2)+SP3
     const a2 = shuffleArray([...exempleArray.slice(0, SP2),...shuffleArray(exempleArray.slice(l1,l2)).slice(0,SP2)]);
     //====================
     const a3 = shuffleArray([...exempleArray.slice(0, SP3),...shuffleArray(exempleArray.slice(l2,exempleArray.length)).slice(0,SP3)]);
     const data = {
        setVA:true,
        data1: a1,
        data2: a2,
        data3: a3,
        
      }
     dispatcher(setRA(data))
    }
    //==============================================================
    }
    const endTime = ()=>{
        const a = Date();
        const send = [ Number(a.slice(16 , 18)), Number(a.slice(19 , 21)), Number(a.slice(22 , 24))];
        const total = ((send[0]*60)*60)+(send[1]*60)+(send[2]);
        const getData = JSON.parse(localStorage.getItem("TotalEnglishTime"));

        if(startStatus){
        const setData =  getData +(total - timeNow); 
        dispatcher(setDone(setData));
        if(localStorage.getItem("TotalEnglishTime")){
           localStorage.setItem("TotalEnglishTime",JSON.stringify(setData));
           dispatcher(setStart(false));
           dispatcher(endToday())

        }
    }
    }
    const lookTimeFunction = ()=>{
        const a = Date();
        const send = [ Number(a.slice(16 , 18)), Number(a.slice(19 , 21)), Number(a.slice(22 , 24))];
        const total = ((send[0]*60)*60)+(send[1]*60)+(send[2]);
        const setData =  (total - timeNow);
        if(startStatus){
            dispatcher(lookTimeNow(setData))
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
            <p>D: {days.toFixed()} H: {hours.toFixed()}, {minutes.toFixed()} , {seconds}</p>
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
        <div className='firstRawTitle'>{title}</div>
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
        <div  onClick={lookTimeFunction} className='lookTime'>look</div>
        <p>H: {hoursNow.toFixed()} , {minutesNow.toFixed()} , {secondsNow.toFixed()}</p>
        <div onClick={endTime} className='firstRawButton'>DONE</div>
        </div>
   </div>
  )
}

export default FirstRaw