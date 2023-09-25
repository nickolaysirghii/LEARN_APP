import React from 'react';
 import FirstRaw from './FirstRaw/FirstRaw';
 import SecondRaw from './SecondRaw/SecondRaw';
 import ThirdRaw from './ThirdRaw/ThirdRaw';
 import FifthRaw from './FifthRaw/FifthRaw';
 import Footer from './Footer/Footer';
 import { useSelector } from 'react-redux';


const Platform = () => {
  const {workingTitle,workingArray,workingSlice} = useSelector((state)=>state.calculate);
 return (
    
    <div>
      <FirstRaw title={workingTitle}data={workingArray} slice={workingSlice} />
      <SecondRaw />
      <ThirdRaw title={workingTitle}data={workingArray}/>
      <FifthRaw title={workingTitle} data={workingArray}/>
      <Footer  title={workingTitle}/>
    </div>
  )
}

export default Platform