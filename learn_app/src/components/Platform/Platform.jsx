import React from 'react';
 import FirstRaw from './FirstRaw/FirstRaw';
 import SecondRaw from './SecondRaw/SecondRaw';
 import ThirdRaw from './ThirdRaw/ThirdRaw';
 import FifthRaw from './FifthRaw/FifthRaw';
 import Footer from './Footer/Footer';
 import { useSelector } from 'react-redux';
 import { english } from '../../data/englishData';


const Platform = () => {
  const {workingTitle,workingArray,workingSlice} = useSelector((state)=>state.calculate);

  const { realArray} = useSelector((state)=>state.platSlice);
   let picture = english[0].image
  if(realArray.length > 0){
   
    picture = realArray[0].image
   
  }

 return (

    
    <div style={{
    position: "relative"

    }}>
      <div style={{
        position: "absolute",
        width: "900px",
        height: "670px",
        left: "300px",
        backgroundImage: picture,
        backgroundSize: "cover"
    }}></div>
      <FirstRaw title={workingTitle}data={workingArray} slice={workingSlice} />
      <SecondRaw />
      <ThirdRaw title={workingTitle}data={workingArray}/>
      <FifthRaw title={workingTitle} data={workingArray}/>
      <Footer  title={workingTitle}/>
    </div>
  )
}

export default Platform