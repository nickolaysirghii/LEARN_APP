import React from 'react';
 import FirstRaw from './FirstRaw/FirstRaw';
 import SecondRaw from './SecondRaw/SecondRaw';
 import ThirdRaw from './ThirdRaw/ThirdRaw';
 import FifthRaw from './FifthRaw/FifthRaw';
 import Footer from './Footer/Footer';
 import { useSelector } from 'react-redux';


const Platform = () => {
    const { totalTime , timeNow , start ,startStatus }= useSelector((state)=>state.calculate);
  return (
    <div>
      <FirstRaw totalTime={totalTime} timeNow={timeNow} start={start} startStatus={startStatus} />
      <SecondRaw />
      <ThirdRaw />
      <FifthRaw />
      <Footer />
    </div>
  )
}

export default Platform