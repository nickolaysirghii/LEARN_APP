import React from 'react';
import "./firstRaw.css";
import { useDispatch ,useSelector} from 'react-redux';
import { setStart , setDone , setCount , lookTimeNow} from '../../../ReduxStore/Slices/timeSlice';
import { setRA } from '../../../ReduxStore/Slices/platformSlice';
import { footer } from '../../../data/footerData';


const FirstRaw = ({data,title,slice }) => {
 
    const {lookTime,timeNow,startStatus} = useSelector((state)=>state.calculate)

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
    const seconds = slice % 60;
    const minutes = Math.floor(slice / 60) % 60;
    const hours = Math.floor(Math.floor(slice / 60) / 60) % 24;
    const days = ((slice/60)/60)/24;

    const secondsNow = lookTime % 60;
    const minutesNow = Math.floor(lookTime / 60) % 60;
    const hoursNow = Math.floor((lookTime/60)/60) % 24;
    
    const showTime = ()=>{
     const a = Date();
    const send = [ Number(a.slice(16 , 18)), Number(a.slice(19 , 21)), Number(a.slice(22 , 24))];
    const total = ((send[0]*60)*60)+(send[1]*60)+(send[2]);
     dispatcher(setCount(total));
     dispatcher(setStart(true));
     dispatcher(lookTimeNow(0))
     if(!localStorage.getItem(title)){
       localStorage.setItem(title,JSON.stringify(0));
     }
     //==============================================================
     if(VA1.length === 0){
     const firstStep = data.slice(0,SP1);
     const secondStep = data.slice(0,SP2);
     const thirdStep = data.slice(0,SP3);
     
     const d = data.slice(SP3,data.length);
     const r = Math.floor((d.length/100)*20)+SP3;
     const g = Math.floor(d.length/2)+SP3;

     const firstBlock = data.slice(SP3,r);
     const secondBlock = data.slice(r,g);
     const thirdBlock = data.slice(g,data.length);

     const firstBlCat = shuffleArray(firstBlock).slice(0,SP1);
     const secondBlCat = shuffleArray(secondBlock).slice(0,SP2);
     const thirdBlCat = shuffleArray(thirdBlock).slice(0,SP3);

     const firstVer = [...firstStep,...firstBlCat];
     const secondVer = [...secondStep,...secondBlCat];
     const thirdVer = [...thirdStep,...thirdBlCat];

     const aa = shuffleArray(firstVer);
     const bb = shuffleArray(secondVer);
     const cc = shuffleArray(thirdVer);

     const data333 = {
        setVA:true,
        ependence:data,
        data1: aa,
        data2: bb,
        data3: cc,
        forSet: data
        
      }
     dispatcher(setRA(data333));
     }
    //==============================================================
    }
    const endTime = ()=>{
        const a = Date();
        const send = [ Number(a.slice(16 , 18)), Number(a.slice(19 , 21)), Number(a.slice(22 , 24))];
        const total = ((send[0]*60)*60)+(send[1]*60)+(send[2]);
        const getData = JSON.parse(localStorage.getItem(title));

        if(startStatus){
        const setData =  {
            name:title,
            data:getData +(total - timeNow)
        }; 
        dispatcher(setRA({finish: true}))
        dispatcher(setDone(setData));
        if(localStorage.getItem(title)){
           localStorage.setItem(title,JSON.stringify(setData.data));
           dispatcher(setStart(false));
//======================================================================================
           if(localStorage.getItem(`${title}Freequance`)){
            const a = JSON.parse(localStorage.getItem(`${title}Freequance`));

            a.forEach((elem) => {
                if(elem.day == Date().slice(8,10)){
                        elem.time = total - timeNow
                    }})
            localStorage.setItem(`${title}Freequance`,JSON.stringify(a))
           }else{
            localStorage.setItem(`${title}Freequance`,JSON.stringify(footer))
           }

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
                <p>Wrong: <span className='wrong'>23434</span>/23%</p>
            </div>
        </div>
        <div className='firstRawTitle'>{title}</div>
        <div className='firstRawType'>
            <div>
            <p>Correct: <span className='correct'>23434</span>/23%</p>
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