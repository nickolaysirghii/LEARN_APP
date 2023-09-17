import React from 'react';
import "./footer.css";
import { useSelector } from 'react-redux';

const Footer = () => {
  const { footerData } = useSelector((state)=>state.calculate)
  return (
    <div className='footerContainer'>
        <div className='daysInRaw'>
          {
            footerData.map((elem,idx) => {
              return <div style={{backgroundColor: elem.yes ? "bisque" : "grey"}} key={idx}>
                {elem.id}
              </div>
            })
          }
        </div>
    </div>
  )
}

export default Footer