import React from 'react';
import "./footer.css";
import { useSelector } from 'react-redux';
import EveryDay from './EveryDay';

const Footer = ({title}) => {
  const { footerData } = useSelector((state)=>state.calculate);
  const stor = localStorage.getItem(`${title}Freequance`) ?
  JSON.parse(localStorage.getItem(`${title}Freequance`)) : footerData
  

  return (
    <div className='footerContainer'>
        <div className='daysInRaw'>
          {
            stor.map((elem,idx) => {
              return <EveryDay data={elem}  key={idx}>
              </EveryDay>
            })
          }
        </div>
    </div>
  )
}

export default Footer