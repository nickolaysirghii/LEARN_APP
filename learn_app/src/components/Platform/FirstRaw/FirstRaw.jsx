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
     const firstStep = exempleArray.slice(0,SP1);
     const secondStep = exempleArray.slice(0,SP2);
     const thirdStep = exempleArray.slice(0,SP3);
     
     const d = exempleArray.slice(SP3,exempleArray.length);
     const r = Math.floor((d.length/100)*20)+SP3;
     const g = Math.floor(d.length/2)+SP3;

     const firstBlock = exempleArray.slice(SP3,r);
     const secondBlock = exempleArray.slice(r,g);
     const thirdBlock = exempleArray.slice(g,exempleArray.length);

     const firstBlCat = shuffleArray(firstBlock).slice(0,SP1);
     const secondBlCat = shuffleArray(secondBlock).slice(0,SP2);
     const thirdBlCat = shuffleArray(thirdBlock).slice(0,SP3);

     const firstVer = [...firstStep,...firstBlCat];
     const secondVer = [...secondStep,...secondBlCat];
     const thirdVer = [...thirdStep,...thirdBlCat];

     const aa = shuffleArray(firstVer);
     const bb = shuffleArray(secondVer);
     const cc = shuffleArray(thirdVer);

     const data = {
        setVA:true,
        data1: aa,
        data2: bb,
        data3: cc,
        
      }
     dispatcher(setRA(data));
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