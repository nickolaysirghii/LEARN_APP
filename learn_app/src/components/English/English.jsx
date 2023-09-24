import React from 'react';
import Platform from '../Platform/Platform';
import { english } from '../../data/englishData';
import { useSelector } from 'react-redux';

const English = () => {
 
  const {totalTime} = useSelector((state)=>state.calculate)
  return (
    <Platform data={english} title="English" slice={totalTime}/>
  )
}

export default English