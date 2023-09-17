import React from 'react';
 import FirstRaw from './FirstRaw/FirstRaw';
 import SecondRaw from './SecondRaw/SecondRaw';
 import ThirdRaw from './ThirdRaw/ThirdRaw';
 import FifthRaw from './FifthRaw/FifthRaw';
 import Footer from './Footer/Footer';
 import { useSelector } from 'react-redux';


const Platform = ({title,data}) => {
  return (
    <div>
      <FirstRaw title={title}data={data} {...useSelector((state)=>state.calculate)} />
      <SecondRaw />
      <ThirdRaw title={title}data={data}/>
      <FifthRaw title={title} data={data}/>
      <Footer />
    </div>
  )
}

export default Platform