import React from 'react';
 import FirstRaw from './FirstRaw/FirstRaw';
 import SecondRaw from './SecondRaw/SecondRaw';
 import ThirdRaw from './ThirdRaw/ThirdRaw';
 import FifthRaw from './FifthRaw/FifthRaw';
 import Footer from './Footer/Footer';
 import { useSelector } from 'react-redux';


const Platform = () => {
  const title = "English";
  return (
    <div>
      <FirstRaw title={title} {...useSelector((state)=>state.calculate)}/>
      <SecondRaw />
      <ThirdRaw {...useSelector((state)=>state.main)} />
      <FifthRaw title={title} data={useSelector((state)=>state.enter)}/>
      <Footer />
    </div>
  )
}

export default Platform