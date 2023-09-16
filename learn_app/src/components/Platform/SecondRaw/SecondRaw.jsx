import React from 'react';
import "./secondRaw.css";
import { useSelector } from 'react-redux';

const SecondRaw = () => {
  const {firstStepInfo,secondStepInfo,
    thirdStepInfo, SP1,SP2,SP3,VA1,VA2,realArray,stepNow,tryNow,questionNow
  } = useSelector((state)=>state.platSlice);
  return (
    <div className='secondRawContainer'>
      <div className='stepsTry'>
       <div style={{backgroundColor: stepNow===1 ? "green" : "gray"}}>
       {
         firstStepInfo && firstStepInfo.map((elem,idx)=>{
            return(
              <div key={idx} className='tryes'>
          <p className='qRight'>{elem.right}</p>
          /<p className='middleQ'>{elem.try}</p>/
          <p className='qWrong'>{elem.wrong}</p>
        </div>
            )
          })
         }
        </div>
       <div style={{backgroundColor: stepNow===2 ? "green" : "gray"}}>
       {
         secondStepInfo && secondStepInfo.map((elem,idx)=>{
            return(
              <div key={idx} className='tryes'>
          <p className='qRight'>{elem.right}</p>
          /<p className='middleQ'>{elem.try}</p>/
          <p className='qWrong'>{elem.wrong}</p>
        </div>
            )
          })
         }
       </div>
       <div style={{backgroundColor: stepNow===3 ? "green" : "gray"}}>
       {
         thirdStepInfo && thirdStepInfo.map((elem,idx)=>{
            return(
              <div key={idx} className='tryes'>
          <p className='qRight'>{elem.right}</p>
          /<p className='middleQ'>{elem.try}</p>/
          <p className='qWrong'>{elem.wrong}</p>
        </div>
            )
          })
         }
       </div>
      </div>
      <div className='QuestionsRR'>
      {
        VA1.map((elem , idx) => {

          return <div style={{backgroundColor:elem.answer === elem.fakeAnswer ? "green": "rgb(228, 117, 21)"}} className = {idx === questionNow-1 ? 'With_border': "simple"} key={idx}
           >{idx + 1}</div>
        })
      }
      </div>
    </div>
  )
}

export default SecondRaw