import React from 'react';
 import FirstRaw from './FirstRaw/FirstRaw';
 import SecondRaw from './SecondRaw/SecondRaw';
 import ThirdRaw from './ThirdRaw/ThirdRaw';
 import FifthRaw from './FifthRaw/FifthRaw';
 import Footer from './Footer/Footer';


const Platform = ({title,data,slice}) => {

  return (
    
    <div>
      <FirstRaw title={title}data={data} slice={slice} />
      <SecondRaw />
      <ThirdRaw title={title}data={data}/>
      <FifthRaw title={title} data={data}/>
      <Footer />
    </div>
  )
}

export default Platform