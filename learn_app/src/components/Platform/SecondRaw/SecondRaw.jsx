import React from 'react';
import "./secondRaw.css";
import { useSelector } from 'react-redux';

const SecondRaw = () => {
  const { SP1,SP2,SP3,VA1,VA2,realArray,stepNow,tryNow,questionNow
  } = useSelector((state)=>state.platSlice);

 
  return (
    <div className='secondRawContainer'>
      {
        VA1.map((elem , idx) => {

          return <div style={{backgroundColor:elem.answer === elem.fakeAnswer ? "blue": "green"}} className = {idx === questionNow-1 ? 'With_border': "simple"} key={idx}
           >{idx + 1}</div>
        })
      }
    

        {/* <div>1</div>
        <div>2</div>
        <div>3</div>
        <div className='With_border'></div>
        <div>99</div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div> */}
        
    
    </div>
  )
}

export default SecondRaw